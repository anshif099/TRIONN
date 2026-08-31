<?php
/**
 * Shared contact form.
 *
 * @package TrionnStudio
 */
$form_id = isset($args['id']) ? $args['id'] : 'project-inquiry';
$fallback_message = '';
if (isset($_GET['inquiry'])) {
    $fallback_message = 'sent' === sanitize_key(wp_unslash($_GET['inquiry']))
        ? __('The conversation begins. We will connect with you soon.', 'trionn-studio')
        : __('The inquiry could not be sent. Please try again or email us directly.', 'trionn-studio');
}
?>
<form class="inquiry-form" id="<?php echo esc_attr($form_id); ?>" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" novalidate>
    <input type="hidden" name="action" value="trionn_contact">
    <input type="hidden" name="nonce" value="<?php echo esc_attr(wp_create_nonce('trionn_contact')); ?>">
    <div class="inquiry-form__trap" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
    <div class="form-grid">
        <label><span><?php esc_html_e('Your name', 'trionn-studio'); ?> *</span><input type="text" name="name" minlength="2" autocomplete="name" required placeholder="<?php esc_attr_e('Enter your name', 'trionn-studio'); ?>"></label>
        <label><span><?php esc_html_e('Email', 'trionn-studio'); ?> *</span><input type="email" name="email" autocomplete="email" required placeholder="you@company.com"></label>
        <label><span><?php esc_html_e('Company', 'trionn-studio'); ?></span><input type="text" name="company" autocomplete="organization" placeholder="<?php esc_attr_e('Company or brand', 'trionn-studio'); ?>"></label>
        <label><span><?php esc_html_e('Service', 'trionn-studio'); ?> *</span><select name="service" required><option value=""><?php esc_html_e('Select a service', 'trionn-studio'); ?></option><option>Website Design &amp; Development</option><option>UI/UX Design</option><option>Web Development</option><option>Mobile App Design</option><option>Branding &amp; Identity</option><option>AI-Powered Digital Product</option><option>Something Else</option></select></label>
        <label class="form-grid__wide"><span><?php esc_html_e('Your vision', 'trionn-studio'); ?> *</span><textarea name="message" minlength="20" required rows="5" placeholder="<?php esc_attr_e('Tell us about the challenge, goals, and timing.', 'trionn-studio'); ?>"></textarea></label>
        <label class="form-grid__wide"><span><?php esc_html_e('Investment range', 'trionn-studio'); ?> *</span><select name="budget" required><option value=""><?php esc_html_e('Select your estimated budget', 'trionn-studio'); ?></option><option>Under $5K</option><option>$5K - $15K</option><option>$15K - $30K</option><option>$30K - $60K</option><option>$60K+</option><option>Not sure yet</option></select></label>
    </div>
    <div class="inquiry-form__footer">
        <button class="button button--light" type="submit"><span><?php esc_html_e('Send inquiry', 'trionn-studio'); ?></span><span aria-hidden="true">↗</span></button>
        <p class="form-status" role="status" aria-live="polite"><?php echo esc_html($fallback_message); ?></p>
    </div>
</form>
