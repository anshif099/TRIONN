<?php get_header(); ?>
<section class="page-hero hero hero--cream"><div class="shell hero__inner"><p class="eyebrow"><?php bloginfo('name'); ?></p><h1 class="display-title"><?php bloginfo('description'); ?></h1></div></section>
<section class="section"><div class="shell project-grid"><?php while (have_posts()) : the_post(); ?><article class="value-card"><h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2><?php the_excerpt(); ?></article><?php endwhile; ?></div></section>
<?php get_footer(); ?>

