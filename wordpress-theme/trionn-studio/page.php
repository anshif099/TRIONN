<?php get_header(); ?>
<section class="page-hero hero hero--cream"><div class="shell hero__inner"><p class="eyebrow"><?php bloginfo('name'); ?></p><h1 class="display-title"><?php the_title(); ?></h1></div></section>
<section class="section"><div class="shell editor-copy"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div></section>
<?php get_footer(); ?>

