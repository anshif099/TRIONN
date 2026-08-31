<?php
/**
 * Site header.
 *
 * @package TrionnStudio
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="theme-color" content="#050507">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="site-loader" aria-hidden="true"><div class="site-loader__mark"><span>TRI</span><span>ONN</span></div><div class="site-loader__line"></div></div>
<div class="cursor" aria-hidden="true"><span></span></div>

<header class="site-header" data-header>
    <a class="site-logo magnetic" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php esc_attr_e('TRIONN home', 'trionn-studio'); ?>">
        <img src="<?php echo esc_url(trionn_media('images/logo.svg')); ?>" width="132" height="35" alt="TRIONN">
    </a>
    <div class="site-header__actions">
        <button class="sound-toggle magnetic" type="button" aria-pressed="false" aria-label="<?php esc_attr_e('Toggle interface sound', 'trionn-studio'); ?>"><span class="sound-bars" aria-hidden="true"><i></i><i></i><i></i></span></button>
        <a class="header-talk magnetic" href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e("Let's talk", 'trionn-studio'); ?></a>
        <button class="menu-toggle magnetic" type="button" aria-expanded="false" aria-controls="site-menu"><span><?php esc_html_e('Menu', 'trionn-studio'); ?></span><i></i></button>
    </div>
</header>

<div class="site-menu" id="site-menu" aria-hidden="true">
    <div class="site-menu__backdrop"></div>
    <div class="site-menu__panel">
        <p class="eyebrow"><?php esc_html_e('Inspire · Innovate · Impact', 'trionn-studio'); ?></p>
        <nav aria-label="<?php esc_attr_e('Primary navigation', 'trionn-studio'); ?>">
            <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => false, 'menu_class' => 'site-menu__list', 'fallback_cb' => 'trionn_primary_menu_fallback')); ?>
        </nav>
        <div class="site-menu__meta">
            <div><span><?php esc_html_e('Business enquiry', 'trionn-studio'); ?></span><a href="mailto:<?php echo esc_attr(trionn_option('email', 'hello@trionn.com')); ?>"><?php echo esc_html(trionn_option('email', 'hello@trionn.com')); ?></a></div>
            <div><span><?php esc_html_e('Established', 'trionn-studio'); ?></span><strong>2012 — <?php echo esc_html(wp_date('Y')); ?></strong></div>
        </div>
    </div>
</div>

<main id="main" class="site-main">

