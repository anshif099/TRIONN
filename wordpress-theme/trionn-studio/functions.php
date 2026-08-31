<?php
/**
 * TRIONN Studio theme bootstrap.
 *
 * @package TrionnStudio
 */

if (!defined('ABSPATH')) {
    exit;
}

define('TRIONN_VERSION', '1.0.0');
define('TRIONN_PATH', get_template_directory());
define('TRIONN_URI', get_template_directory_uri());

require_once TRIONN_PATH . '/inc/content.php';
require_once TRIONN_PATH . '/inc/admin.php';
require_once TRIONN_PATH . '/inc/contact.php';

function trionn_setup() {
    load_theme_textdomain('trionn-studio', TRIONN_PATH . '/languages');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    register_nav_menus(array('primary' => __('Primary navigation', 'trionn-studio')));
    add_image_size('trionn-project', 1600, 1100, true);
    add_image_size('trionn-person', 720, 900, true);
}
add_action('after_setup_theme', 'trionn_setup');

function trionn_enqueue_assets() {
    wp_enqueue_style('trionn-style', get_stylesheet_uri(), array(), TRIONN_VERSION);
    wp_enqueue_style('trionn-theme', TRIONN_URI . '/assets/css/theme.css', array('trionn-style'), TRIONN_VERSION);
    wp_enqueue_script('trionn-theme', TRIONN_URI . '/assets/js/theme.js', array(), TRIONN_VERSION, true);

    if (is_page('about')) {
        wp_enqueue_script('trionn-team-lab', TRIONN_URI . '/assets/js/team-lab.js', array('trionn-theme'), TRIONN_VERSION, true);
    }

    wp_localize_script('trionn-theme', 'TRIONN', array(
        'ajaxUrl'   => admin_url('admin-ajax.php'),
        'nonce'     => wp_create_nonce('trionn_contact'),
        'mediaBase' => trailingslashit(TRIONN_URI . '/media'),
        'sound'     => array(
            'hover'       => trionn_media('assets/hover-beep.mp3'),
            'identifying' => trionn_media('audio/voice/identifying.mp3'),
            'detected'    => trionn_media('audio/voice/detected.mp3'),
        ),
    ));
}
add_action('wp_enqueue_scripts', 'trionn_enqueue_assets');

function trionn_media($path = '') {
    return trailingslashit(TRIONN_URI . '/media') . ltrim($path, '/');
}

function trionn_asset_key($value) {
    return preg_replace('/[^A-Za-z0-9_-]/', '', (string) $value);
}

function trionn_option($key, $fallback = '') {
    $options = get_option('trionn_settings', array());
    return isset($options[$key]) && '' !== $options[$key] ? $options[$key] : $fallback;
}

function trionn_page_field($key, $fallback = '', $post_id = null) {
    $post_id = $post_id ?: get_queried_object_id();
    $value = $post_id ? get_post_meta($post_id, '_trionn_' . $key, true) : '';
    return '' !== $value ? $value : $fallback;
}

function trionn_entry_image($post_id, $fallback_path, $size = 'full') {
    if (has_post_thumbnail($post_id)) {
        return get_the_post_thumbnail_url($post_id, $size);
    }
    return trionn_media($fallback_path);
}

function trionn_get_entries($post_type, $limit = -1) {
    return new WP_Query(array(
        'post_type'      => $post_type,
        'post_status'    => 'publish',
        'posts_per_page' => $limit,
        'orderby'        => array('menu_order' => 'ASC', 'date' => 'ASC'),
        'order'          => 'ASC',
    ));
}

function trionn_primary_menu_fallback() {
    $items = array(
        'work'          => __('Work', 'trionn-studio'),
        'services'      => __('Services', 'trionn-studio'),
        'about'         => __('About', 'trionn-studio'),
        'contact'       => __('Contact', 'trionn-studio'),
        'trionn-story'  => __('The TRIONN name story', 'trionn-studio'),
    );
    echo '<ul class="site-menu__list">';
    foreach ($items as $slug => $label) {
        printf('<li><a href="%s">%s</a></li>', esc_url(home_url('/' . $slug . '/')), esc_html($label));
    }
    echo '</ul>';
}

function trionn_body_classes($classes) {
    $classes[] = 'trionn-native-theme';
    return $classes;
}
add_filter('body_class', 'trionn_body_classes');
