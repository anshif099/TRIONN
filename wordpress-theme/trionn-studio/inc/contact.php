<?php
/**
 * Contact form processing.
 *
 * @package TrionnStudio
 */

if (!defined('ABSPATH')) {
    exit;
}

function trionn_contact_result($success, $message, $status = 200) {
    if (wp_doing_ajax()) {
        if ($success) {
            wp_send_json_success(array('message' => $message), $status);
        }
        wp_send_json_error(array('message' => $message), $status);
    }

    $target = wp_get_referer() ?: home_url('/contact/');
    $target = add_query_arg('inquiry', $success ? 'sent' : 'error', $target);
    wp_safe_redirect($target);
    exit;
}

function trionn_process_contact() {
    $nonce = isset($_POST['nonce']) ? sanitize_text_field(wp_unslash($_POST['nonce'])) : '';
    if (!wp_verify_nonce($nonce, 'trionn_contact')) {
        trionn_contact_result(false, __('Your session expired. Refresh the page and try again.', 'trionn-studio'), 403);
    }

    if (!empty($_POST['website'])) {
        trionn_contact_result(true, __('Thank you. Your inquiry has been received.', 'trionn-studio'));
    }

    $ip = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : 'unknown';
    $rate_key = 'trionn_form_' . md5($ip);
    if (get_transient($rate_key)) {
        trionn_contact_result(false, __('Please wait a minute before sending another inquiry.', 'trionn-studio'), 429);
    }

    $name = isset($_POST['name']) ? sanitize_text_field(wp_unslash($_POST['name'])) : '';
    $email = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
    $company = isset($_POST['company']) ? sanitize_text_field(wp_unslash($_POST['company'])) : '';
    $service = isset($_POST['service']) ? sanitize_text_field(wp_unslash($_POST['service'])) : '';
    $budget = isset($_POST['budget']) ? sanitize_text_field(wp_unslash($_POST['budget'])) : '';
    $message = isset($_POST['message']) ? sanitize_textarea_field(wp_unslash($_POST['message'])) : '';

    if (strlen($name) < 2 || !is_email($email) || !$service || strlen($message) < 20 || !$budget) {
        trionn_contact_result(false, __('Complete every required field with valid information.', 'trionn-studio'), 422);
    }

    $inquiry_id = wp_insert_post(array(
        'post_type'    => 'trionn_inquiry',
        'post_status'  => 'private',
        'post_title'   => sprintf('%s — %s', $name, wp_date('M j, Y H:i')),
        'post_content' => $message,
    ));

    if (is_wp_error($inquiry_id)) {
        trionn_contact_result(false, __('The inquiry could not be saved. Please email us directly.', 'trionn-studio'), 500);
    }

    foreach (array('email' => $email, 'company' => $company, 'service' => $service, 'budget' => $budget) as $key => $value) {
        update_post_meta($inquiry_id, '_trionn_' . $key, $value);
    }

    set_transient($rate_key, 1, MINUTE_IN_SECONDS);

    $recipient = trionn_option('email', get_option('admin_email'));
    $subject = sprintf(__('New project inquiry from %s', 'trionn-studio'), $name);
    $mail_body = implode("\n", array(
        'Name: ' . $name,
        'Email: ' . $email,
        'Company: ' . ($company ?: '—'),
        'Service: ' . $service,
        'Budget: ' . $budget,
        '',
        $message,
    ));
    wp_mail($recipient, $subject, $mail_body, array('Reply-To: ' . $name . ' <' . $email . '>'));

    trionn_contact_result(true, __('The conversation begins. We will connect with you soon.', 'trionn-studio'));
}
add_action('wp_ajax_trionn_contact', 'trionn_process_contact');
add_action('wp_ajax_nopriv_trionn_contact', 'trionn_process_contact');
add_action('admin_post_trionn_contact', 'trionn_process_contact');
add_action('admin_post_nopriv_trionn_contact', 'trionn_process_contact');

