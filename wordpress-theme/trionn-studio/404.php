<?php get_header(); ?>
<section class="not-found hero hero--dark"><div class="shell hero__inner"><p class="eyebrow">404</p><h1 class="display-title"><?php esc_html_e('This path leads nowhere.', 'trionn-studio'); ?></h1><a class="button button--light" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Return home', 'trionn-studio'); ?> ↗</a></div></section>
<?php get_footer(); ?>

