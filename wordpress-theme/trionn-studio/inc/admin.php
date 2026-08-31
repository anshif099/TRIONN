<?php
/**
 * Theme settings and inquiry administration.
 *
 * @package TrionnStudio
 */

if (!defined('ABSPATH')) {
    exit;
}

function trionn_settings_defaults() {
    return array(
        'email'       => 'hello@trionn.com',
        'phone'       => '+91 98241 82099',
        'booking_url' => '#',
        'address'     => "Office No. 216 - 4Plus Complex\nSardar Nagar Main Road, Astron Chowk\nRajkot 360001, Gujarat, India",
        'linkedin'    => '#',
        'instagram'   => '#',
        'facebook'    => '#',
        'dribbble'    => '#',
    );
}

function trionn_register_settings() {
    register_setting('trionn_settings_group', 'trionn_settings', array(
        'type'              => 'array',
        'sanitize_callback' => 'trionn_sanitize_settings',
        'default'           => trionn_settings_defaults(),
    ));
}
add_action('admin_init', 'trionn_register_settings');

function trionn_sanitize_settings($input) {
    $defaults = trionn_settings_defaults();
    $output = array();
    $output['email'] = sanitize_email(isset($input['email']) ? $input['email'] : $defaults['email']);
    $output['phone'] = sanitize_text_field(isset($input['phone']) ? $input['phone'] : $defaults['phone']);
    $output['booking_url'] = esc_url_raw(isset($input['booking_url']) ? $input['booking_url'] : '');
    $output['address'] = sanitize_textarea_field(isset($input['address']) ? $input['address'] : $defaults['address']);
    foreach (array('linkedin', 'instagram', 'facebook', 'dribbble') as $network) {
        $output[$network] = esc_url_raw(isset($input[$network]) ? $input[$network] : '');
    }
    return $output;
}

function trionn_admin_menu() {
    add_menu_page(
        __('TRIONN settings', 'trionn-studio'),
        __('TRIONN', 'trionn-studio'),
        'manage_options',
        'trionn-settings',
        'trionn_settings_page',
        'dashicons-art',
        3
    );
}
add_action('admin_menu', 'trionn_admin_menu');

function trionn_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }
    $values = wp_parse_args(get_option('trionn_settings', array()), trionn_settings_defaults());
    ?>
    <div class="wrap">
        <h1><?php esc_html_e('TRIONN global settings', 'trionn-studio'); ?></h1>
        <p><?php esc_html_e('Projects, services, team members, and pages are editable from their own menus. This screen controls shared contact and social details.', 'trionn-studio'); ?></p>
        <form action="options.php" method="post">
            <?php settings_fields('trionn_settings_group'); ?>
            <table class="form-table" role="presentation">
                <tr><th><label for="trionn-email"><?php esc_html_e('Business email', 'trionn-studio'); ?></label></th><td><input class="regular-text" id="trionn-email" type="email" name="trionn_settings[email]" value="<?php echo esc_attr($values['email']); ?>"></td></tr>
                <tr><th><label for="trionn-phone"><?php esc_html_e('Phone', 'trionn-studio'); ?></label></th><td><input class="regular-text" id="trionn-phone" type="text" name="trionn_settings[phone]" value="<?php echo esc_attr($values['phone']); ?>"></td></tr>
                <tr><th><label for="trionn-booking"><?php esc_html_e('Booking URL', 'trionn-studio'); ?></label></th><td><input class="regular-text" id="trionn-booking" type="url" name="trionn_settings[booking_url]" value="<?php echo esc_attr($values['booking_url']); ?>"></td></tr>
                <tr><th><label for="trionn-address"><?php esc_html_e('Office address', 'trionn-studio'); ?></label></th><td><textarea class="large-text" rows="4" id="trionn-address" name="trionn_settings[address]"><?php echo esc_textarea($values['address']); ?></textarea></td></tr>
                <?php foreach (array('linkedin', 'instagram', 'facebook', 'dribbble') as $network) : ?>
                    <tr><th><label for="trionn-<?php echo esc_attr($network); ?>"><?php echo esc_html(ucfirst($network)); ?></label></th><td><input class="regular-text" id="trionn-<?php echo esc_attr($network); ?>" type="url" name="trionn_settings[<?php echo esc_attr($network); ?>]" value="<?php echo esc_attr($values[$network]); ?>"></td></tr>
                <?php endforeach; ?>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

function trionn_inquiry_columns($columns) {
    return array(
        'cb'      => isset($columns['cb']) ? $columns['cb'] : '<input type="checkbox">',
        'title'   => __('Name', 'trionn-studio'),
        'email'   => __('Email', 'trionn-studio'),
        'service' => __('Service', 'trionn-studio'),
        'budget'  => __('Budget', 'trionn-studio'),
        'date'    => __('Received', 'trionn-studio'),
    );
}
add_filter('manage_trionn_inquiry_posts_columns', 'trionn_inquiry_columns');

function trionn_inquiry_column_value($column, $post_id) {
    if (in_array($column, array('email', 'service', 'budget'), true)) {
        echo esc_html(get_post_meta($post_id, '_trionn_' . $column, true));
    }
}
add_action('manage_trionn_inquiry_posts_custom_column', 'trionn_inquiry_column_value', 10, 2);

function trionn_inquiry_details_box() {
    add_meta_box('trionn-inquiry-details', __('Inquiry details', 'trionn-studio'), 'trionn_render_inquiry_details', 'trionn_inquiry', 'side', 'high');
}
add_action('add_meta_boxes', 'trionn_inquiry_details_box');

function trionn_render_inquiry_details($post) {
    foreach (array('email' => 'Email', 'company' => 'Company', 'service' => 'Service', 'budget' => 'Budget') as $key => $label) {
        $value = get_post_meta($post->ID, '_trionn_' . $key, true);
        echo '<p><strong>' . esc_html($label) . '</strong><br>' . esc_html($value ?: '—') . '</p>';
    }
}

