<?php
/**
 * Editable content types, fields, and starter content.
 *
 * @package TrionnStudio
 */

if (!defined('ABSPATH')) {
    exit;
}

function trionn_register_content() {
    register_post_type('trionn_project', array(
        'labels' => array(
            'name'          => __('Work', 'trionn-studio'),
            'singular_name' => __('Project', 'trionn-studio'),
            'add_new_item'  => __('Add project', 'trionn-studio'),
            'edit_item'     => __('Edit project', 'trionn-studio'),
        ),
        'public'       => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-portfolio',
        'supports'     => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'),
        'has_archive'  => false,
        'rewrite'      => array('slug' => 'work', 'with_front' => false),
    ));

    register_post_type('trionn_service', array(
        'labels' => array(
            'name'          => __('Services', 'trionn-studio'),
            'singular_name' => __('Service', 'trionn-studio'),
            'add_new_item'  => __('Add service', 'trionn-studio'),
            'edit_item'     => __('Edit service', 'trionn-studio'),
        ),
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-admin-tools',
        'supports'            => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'),
    ));

    register_post_type('trionn_team', array(
        'labels' => array(
            'name'          => __('Team', 'trionn-studio'),
            'singular_name' => __('Team member', 'trionn-studio'),
            'add_new_item'  => __('Add team member', 'trionn-studio'),
            'edit_item'     => __('Edit team member', 'trionn-studio'),
        ),
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-groups',
        'supports'            => array('title', 'editor', 'thumbnail', 'page-attributes'),
    ));

    register_post_type('trionn_inquiry', array(
        'labels' => array(
            'name'          => __('Inquiries', 'trionn-studio'),
            'singular_name' => __('Inquiry', 'trionn-studio'),
            'edit_item'     => __('View inquiry', 'trionn-studio'),
        ),
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => false,
        'menu_icon'           => 'dashicons-email-alt2',
        'supports'            => array('title', 'editor'),
        'capability_type'     => 'post',
        'map_meta_cap'        => true,
    ));
}
add_action('init', 'trionn_register_content');

function trionn_add_meta_boxes() {
    add_meta_box('trionn-page-fields', __('TRIONN page fields', 'trionn-studio'), 'trionn_page_fields_box', 'page', 'normal', 'high');
    add_meta_box('trionn-project-fields', __('Project display', 'trionn-studio'), 'trionn_project_fields_box', 'trionn_project', 'normal', 'default');
    add_meta_box('trionn-service-fields', __('Service display', 'trionn-studio'), 'trionn_service_fields_box', 'trionn_service', 'normal', 'default');
    add_meta_box('trionn-team-fields', __('Team member media', 'trionn-studio'), 'trionn_team_fields_box', 'trionn_team', 'normal', 'default');
}
add_action('add_meta_boxes', 'trionn_add_meta_boxes');

function trionn_field_row($label, $name, $value, $type = 'text', $description = '') {
    echo '<p><label for="' . esc_attr($name) . '"><strong>' . esc_html($label) . '</strong></label><br>';
    if ('textarea' === $type) {
        echo '<textarea class="widefat" rows="5" id="' . esc_attr($name) . '" name="' . esc_attr($name) . '">' . esc_textarea($value) . '</textarea>';
    } else {
        echo '<input class="widefat" type="' . esc_attr($type) . '" id="' . esc_attr($name) . '" name="' . esc_attr($name) . '" value="' . esc_attr($value) . '">';
    }
    if ($description) {
        echo '<span class="description">' . esc_html($description) . '</span>';
    }
    echo '</p>';
}

function trionn_page_fields_box($post) {
    wp_nonce_field('trionn_save_fields', 'trionn_fields_nonce');
    trionn_field_row(__('Eyebrow', 'trionn-studio'), 'trionn_hero_kicker', get_post_meta($post->ID, '_trionn_hero_kicker', true));
    trionn_field_row(__('Hero title', 'trionn-studio'), 'trionn_hero_title', get_post_meta($post->ID, '_trionn_hero_title', true), 'textarea');
    trionn_field_row(__('Hero introduction', 'trionn-studio'), 'trionn_hero_intro', get_post_meta($post->ID, '_trionn_hero_intro', true), 'textarea');
    trionn_field_row(__('Closing call-to-action', 'trionn-studio'), 'trionn_closing_title', get_post_meta($post->ID, '_trionn_closing_title', true));
    echo '<p class="description">' . esc_html__('The main editor controls the page body. These fields control the animated hero and closing section.', 'trionn-studio') . '</p>';
}

function trionn_project_fields_box($post) {
    wp_nonce_field('trionn_save_fields', 'trionn_fields_nonce');
    trionn_field_row(__('Bundled asset folder', 'trionn-studio'), 'trionn_asset', get_post_meta($post->ID, '_trionn_asset', true), 'text', __('Used until a featured image is selected.', 'trionn-studio'));
    trionn_field_row(__('External project URL', 'trionn-studio'), 'trionn_project_url', get_post_meta($post->ID, '_trionn_project_url', true), 'url');
}

function trionn_service_fields_box($post) {
    wp_nonce_field('trionn_save_fields', 'trionn_fields_nonce');
    trionn_field_row(__('Bundled image key', 'trionn-studio'), 'trionn_asset', get_post_meta($post->ID, '_trionn_asset', true), 'text');
    trionn_field_row(__('Capabilities (one per line)', 'trionn-studio'), 'trionn_capabilities', get_post_meta($post->ID, '_trionn_capabilities', true), 'textarea');
}

function trionn_team_fields_box($post) {
    wp_nonce_field('trionn_save_fields', 'trionn_fields_nonce');
    trionn_field_row(__('Role', 'trionn-studio'), 'trionn_role', get_post_meta($post->ID, '_trionn_role', true));
    trionn_field_row(__('Bundled asset key', 'trionn-studio'), 'trionn_asset', get_post_meta($post->ID, '_trionn_asset', true));
    trionn_field_row(__('Video URL', 'trionn-studio'), 'trionn_video_url', get_post_meta($post->ID, '_trionn_video_url', true), 'url', __('Upload a replacement to Media Library or leave blank to use the bundled video.', 'trionn-studio'));
}

function trionn_save_content_fields($post_id) {
    if (!isset($_POST['trionn_fields_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['trionn_fields_nonce'])), 'trionn_save_fields')) {
        return;
    }
    if ((defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) || !current_user_can('edit_post', $post_id)) {
        return;
    }

    $text_fields = array('hero_kicker', 'closing_title', 'asset', 'role');
    $textarea_fields = array('hero_title', 'hero_intro', 'capabilities');
    $url_fields = array('project_url', 'video_url');
    foreach ($text_fields as $field) {
        if (isset($_POST['trionn_' . $field])) {
            update_post_meta($post_id, '_trionn_' . $field, sanitize_text_field(wp_unslash($_POST['trionn_' . $field])));
        }
    }
    foreach ($textarea_fields as $field) {
        if (isset($_POST['trionn_' . $field])) {
            update_post_meta($post_id, '_trionn_' . $field, sanitize_textarea_field(wp_unslash($_POST['trionn_' . $field])));
        }
    }
    foreach ($url_fields as $field) {
        if (isset($_POST['trionn_' . $field])) {
            update_post_meta($post_id, '_trionn_' . $field, esc_url_raw(wp_unslash($_POST['trionn_' . $field])));
        }
    }
}
add_action('save_post', 'trionn_save_content_fields');

function trionn_seed_post($post_type, $title, $slug, $content = '', $excerpt = '', $order = 0, $meta = array()) {
    $existing = get_page_by_path($slug, OBJECT, $post_type);
    if ($existing) {
        return $existing->ID;
    }
    $post_id = wp_insert_post(array(
        'post_type'    => $post_type,
        'post_status'  => 'publish',
        'post_title'   => $title,
        'post_name'    => $slug,
        'post_content' => $content,
        'post_excerpt' => $excerpt,
        'menu_order'   => $order,
    ));
    if (!is_wp_error($post_id)) {
        foreach ($meta as $key => $value) {
            update_post_meta($post_id, '_trionn_' . $key, $value);
        }
    }
    return $post_id;
}

function trionn_seed_content() {
    trionn_register_content();

    $pages = array(
        array('Home', 'home', 'Trionn is an independent digital studio crafting meaningful brand experiences through strategy, design, and technology.', array('hero_kicker' => 'Inspire · Innovate · Impact', 'hero_title' => 'Designed to mean something.', 'hero_intro' => 'Websites, AI products, brands, and systems built for clarity, scale and impact.', 'closing_title' => "Let's build something great.")),
        array('Work', 'work', 'Over the years, we have delivered successful projects for clients worldwide. Explore a curated selection below.', array('hero_kicker' => 'Selected work', 'hero_title' => 'Our work', 'hero_intro' => 'A curated showcase of branding, digital products, websites, and mobile experiences.', 'closing_title' => "Let's build something great.")),
        array('Services', 'services', 'Focused disciplines where strategy, design, and technology work as one.', array('hero_kicker' => 'What we do best', 'hero_title' => 'Area of expertise', 'hero_intro' => 'Capabilities shaped to scale with ambition and integrate seamlessly into existing platforms.', 'closing_title' => 'Services are outputs. Systems are outcomes.')),
        array('About', 'about', "We've grown through experimentation, learning, and refinement, shaping a practice focused on clarity, craft, and long-term impact.", array('hero_kicker' => 'Independent since 2012', 'hero_title' => 'We are an independent digital studio built on clarity, thoughtful craft, and trust earned worldwide.', 'hero_intro' => 'At the intersection of strategy, design, and technology.', 'closing_title' => 'Different skills. One standard.')),
        array('Contact', 'contact', 'We collaborate with teams who value clarity, craft, and long-term thinking. A short conversation is often the best place to begin.', array('hero_kicker' => 'Start a conversation', 'hero_title' => "Let's start something.", 'hero_intro' => 'We usually reply within one business day.', 'closing_title' => "Let's work together.")),
        array('TRIONN Story', 'trionn-story', 'Inspired by the power of three, TRIONN’s lion mascot represents strength and fearless direction.', array('hero_kicker' => 'The name story', 'hero_title' => 'The story behind the TRIONN name and the meaning of its mascot.', 'hero_intro' => 'Three ideas. One fearless direction.', 'closing_title' => 'Inspire. Innovate. Impact.')),
    );

    $front_id = 0;
    foreach ($pages as $page) {
        $id = trionn_seed_post('page', $page[0], $page[1], $page[2], '', 0, $page[3]);
        if ('home' === $page[1]) {
            $front_id = (int) $id;
        }
    }
    if ($front_id && 'page' !== get_option('show_on_front')) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $front_id);
    }

    $projects = array(
        array('MyWorker AI', 'myworker-ai', 'AI platform simplifying hiring, management, and workforce scaling.', 'myworker'),
        array('Pulse Studio', 'pulse-studio', 'A motion-led studio website showcasing artists, projects, and culture.', 'pulse-studio'),
        array('Loftloom', 'loftloom', 'Seamless real estate platform for effortless property discovery.', 'loftloom'),
        array('DFZ Watch', 'dfz-watch', 'A clean platform to discover, customize, and buy luxury watches.', 'dfz'),
        array('Domus Immobilien Kultur', 'domus', 'Premium real estate and architectural showcase platform.', 'domus'),
        array('Revnet', 'revnet', 'Scalable hybrid cloud solutions for enterprises.', 'revnet'),
        array('Finora', 'finora', 'Modern fintech platform for smart digital finance.', 'finora'),
        array('Crowd Mouth', 'crowd-mouth', 'A creator-driven platform built for fan engagement and rewards.', 'crowd-mouth'),
        array('Technis', 'technis', 'AI-powered spatial intelligence platform for smarter spaces.', 'technis'),
        array('Enterra AI', 'enterra-ai', 'AI-powered platform for intelligent enterprise support.', 'enterra'),
        array('8octa', '8octa', 'Bold branding for modern data analytics.', '8octa'),
        array('One.Dot', 'one-dot', 'A studio website showcasing work, services, and client journeys.', 'onedot'),
        array('iMusic', 'imusic', 'Modern music experiences for immersive listening.', 'imusic'),
        array('Techno', 'techno', 'Smart technology for seamless event experiences.', 'techno'),
        array('Z1Flux Solar', 'z1-flux-solar', 'Solar technology and manufacturing showcase website.', 'z1-flux-solar'),
        array('Novaglam', 'novaglam', 'A fashion e-commerce platform for browsing curated collections.', 'novaglam'),
        array('Reyden', 'reyden', 'Engineering solutions focused on precision and performance.', 'reyden'),
        array('Shore', 'shore', 'A modern finance app designed for smarter everyday banking.', 'shore'),
        array('Stuffosome', 'stuffosome', 'Luxury eyewear branding crafted with bold minimal elegance.', 'stuffosome'),
        array('First Ground Coffee', 'first-ground-coffee', 'An ecommerce platform for discovering and buying premium coffee.', 'first-ground'),
        array('Reelix', 'reelix', 'A filmmaking studio showcasing projects, services, and storytelling.', 'reelix'),
    );
    foreach ($projects as $index => $project) {
        trionn_seed_post('trionn_project', $project[0], $project[1], '', $project[2], $index, array('asset' => $project[3]));
    }

    $services = array(
        array('AI & Intelligent Automation', 'ai-intelligent-automation', 'We implement intelligent automation to simplify digital workflows. Systems are designed to enhance efficiency without adding complexity.', 'AI', "AI-powered digital experiences\nAI workflow automation with n8n\nAI agents & virtual assistants\nSemantic search & recommendations\nAI tools for websites & web apps"),
        array('Website & Mobile Design', 'website-mobile-design', 'We craft responsive digital experiences that feel natural across screens. Design systems remain flexible as products evolve.', 'website-mobile-design', "High-fidelity web design\nMobile app design\nResponsive experiences\nUX/UI systems\nMotion-first interfaces\nInteractive storytelling"),
        array('Product Design', 'product-design', 'We align user needs, business goals, and system logic. Every decision is guided by clarity, usability, and long-term value.', 'product-design', "Product strategy\nInterface design\nUX architecture\nDesign systems\nPrototyping & validation\nMotion & interaction design"),
        array('Web Development', 'web-development', 'We build robust web applications with performance at the core, focused on reliability, security, and scalability.', 'web-development', "Frontend & backend development\nHeadless CMS integration\nWebGL & Canvas experiences\nShader-based interactions\nGSAP motion systems\nCreative development"),
        array('WordPress Development', 'wordpress-development', 'We develop custom WordPress solutions focused on performance and control.', 'wordpress-development', "WordPress websites\nCustom themes\nWooCommerce integrations\nPerformance optimization\nAPI integrations\nOngoing support"),
        array('Branding', 'branding', 'We create visual identities rooted in clarity and consistency, designed to work across digital environments.', 'branding', "Brand strategy\nVisual identity systems\nBrand guidelines\nCreative direction\nLogo design\nDigital brand experiences"),
    );
    foreach ($services as $index => $service) {
        trionn_seed_post('trionn_service', $service[0], $service[1], '', $service[2], $index, array('asset' => $service[3], 'capabilities' => $service[4]));
    }

    $team = array(
        array('Prabhatsinh Maka', 'prabhat', 'Backend Developer'),
        array('Gaurav Joshi', 'gaurav', 'Backend Developer'),
        array('Rushi Vasani', 'rushi', 'Backend Developer'),
        array('Dhruv Solanki', 'dhruv', 'Backend Developer'),
        array('Sandip Rathod', 'sandip', 'Backend Developer'),
        array('Hardik Vatukiya', 'hardik', 'Backend Developer'),
        array('Viral Maru', 'viral', 'Frontend Developer'),
        array('Umang Vaghamshi', 'umang', 'Frontend Developer'),
        array('Rahul Solanki', 'rahul', 'Frontend Developer'),
        array('Bhagirathsinh Jadeja', 'bhagirath', 'Designer'),
        array('Ayaz Kadri', 'ayaz', 'Designer'),
        array('Dhaval Bhadukiya', 'dhaval', 'Designer'),
        array('Vaishnavi Kacha', 'vaishnavi', 'Designer'),
        array('Nilesh Gujarati', 'nilesh', 'Designer'),
    );
    foreach ($team as $index => $person) {
        trionn_seed_post('trionn_team', $person[0], $person[1], '', '', $index, array('asset' => $person[1], 'role' => $person[2]));
    }

    flush_rewrite_rules();
}
add_action('after_switch_theme', 'trionn_seed_content');

