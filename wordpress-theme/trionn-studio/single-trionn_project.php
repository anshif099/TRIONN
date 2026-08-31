<?php
/**
 * Project detail.
 *
 * @package TrionnStudio
 */
get_header();
while (have_posts()) : the_post();
    $project_id = get_the_ID();
    $asset = trionn_asset_key(get_post_meta($project_id, '_trionn_asset', true));
    $project_url = get_post_meta($project_id, '_trionn_project_url', true);
    $cover = trionn_entry_image($project_id, 'images/projects/' . $asset . '/' . $asset . '.jpg', 'full');
    $gallery_dir = TRIONN_PATH . '/media/images/projects/' . $asset;
    $gallery = array();
    if (is_dir($gallery_dir)) {
        foreach (array('jpg', 'jpeg', 'png', 'webp', 'avif') as $extension) {
            $matches = glob($gallery_dir . '/*.' . $extension);
            if (is_array($matches)) {
                $gallery = array_merge($gallery, $matches);
            }
        }
    }
    natsort($gallery);
?>
<article class="project-single">
    <header class="project-single__hero hero hero--cream"><div class="shell hero__inner"><p class="eyebrow"><?php esc_html_e('Selected project', 'trionn-studio'); ?></p><h1 class="display-title split-title"><?php the_title(); ?></h1><div class="hero__intro"><p><?php echo esc_html(get_the_excerpt()); ?></p><?php if ($project_url) : ?><a class="text-link" href="<?php echo esc_url($project_url); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e('Visit project', 'trionn-studio'); ?> ↗</a><?php endif; ?></div></div></header>
    <figure class="project-single__cover"><img src="<?php echo esc_url($cover); ?>" alt="<?php echo esc_attr(get_the_title()); ?>"></figure>
    <?php if (get_the_content()) : ?><section class="section"><div class="shell editor-copy editor-copy--project reveal"><?php the_content(); ?></div></section><?php endif; ?>
    <?php if ($gallery) : ?><section class="project-gallery shell">
        <?php foreach ($gallery as $index => $file) :
            $filename = basename($file);
            if ($filename === $asset . '.jpg' || $filename === $asset . '.webp') { continue; }
        ?><figure class="reveal <?php echo 0 === $index % 4 ? 'project-gallery__wide' : ''; ?>"><img src="<?php echo esc_url(trionn_media('images/projects/' . $asset . '/' . $filename)); ?>" alt="<?php echo esc_attr(get_the_title()); ?> project detail" loading="lazy"></figure><?php endforeach; ?>
    </section><?php endif; ?>
    <section class="section project-next section--dark"><div class="shell"><p class="eyebrow"><?php esc_html_e('Continue exploring', 'trionn-studio'); ?></p><a href="<?php echo esc_url(home_url('/work/')); ?>"><span><?php esc_html_e('All projects', 'trionn-studio'); ?></span><i>↗</i></a></div></section>
</article>
<?php endwhile; get_footer(); ?>
