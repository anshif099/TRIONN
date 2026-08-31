<?php
/**
 * Work listing.
 *
 * @package TrionnStudio
 */
get_header();
?>
<section class="page-hero hero hero--cream">
    <div class="shell hero__inner">
        <p class="eyebrow"><?php echo esc_html(trionn_page_field('hero_kicker', 'Selected work')); ?></p>
        <h1 class="display-title split-title"><?php echo esc_html(trionn_page_field('hero_title', 'Our work')); ?></h1>
        <p class="hero__intro"><?php echo esc_html(trionn_page_field('hero_intro', 'A curated showcase of branding, digital products, websites, and mobile experiences.')); ?></p>
    </div>
</section>
<section class="section work-listing">
    <div class="shell">
        <div class="project-grid">
            <?php $projects = trionn_get_entries('trionn_project'); while ($projects->have_posts()) : $projects->the_post(); get_template_part('template-parts/project-card'); endwhile; wp_reset_postdata(); ?>
        </div>
        <div class="editor-copy reveal"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div>
    </div>
</section>
<?php get_footer(); ?>

