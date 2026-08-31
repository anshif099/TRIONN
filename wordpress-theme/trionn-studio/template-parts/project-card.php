<?php
/**
 * Project card.
 *
 * @package TrionnStudio
 */
$project_id = get_the_ID();
$asset = trionn_asset_key(get_post_meta($project_id, '_trionn_asset', true));
$image = trionn_entry_image($project_id, 'images/projects/' . $asset . '/' . $asset . '.jpg', 'trionn-project');
?>
<article class="project-card reveal" data-tilt>
    <a href="<?php the_permalink(); ?>" aria-label="<?php echo esc_attr(sprintf(__('Explore %s', 'trionn-studio'), get_the_title())); ?>">
        <figure class="project-card__media"><img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy"></figure>
        <div class="project-card__meta">
            <div><span class="project-card__index"><?php echo esc_html(str_pad((string) ((int) get_post_field('menu_order', $project_id) + 1), 2, '0', STR_PAD_LEFT)); ?></span><h3><?php the_title(); ?></h3></div>
            <p><?php echo esc_html(get_the_excerpt()); ?></p>
            <span class="project-card__explore"><?php esc_html_e('Explore project', 'trionn-studio'); ?> ↗</span>
        </div>
    </a>
</article>
