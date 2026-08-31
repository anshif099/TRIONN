<?php
/**
 * Services page.
 *
 * @package TrionnStudio
 */
get_header();
?>
<section class="page-hero hero hero--dark service-hero">
    <div class="shell hero__inner">
        <p class="eyebrow"><?php echo esc_html(trionn_page_field('hero_kicker', 'What we do best')); ?></p>
        <h1 class="display-title split-title"><?php echo esc_html(trionn_page_field('hero_title', 'Area of expertise')); ?></h1>
        <p class="hero__intro"><?php echo esc_html(trionn_page_field('hero_intro', 'Focused disciplines where strategy, design, and technology work as one.')); ?></p>
    </div>
    <div class="service-hero__ticker" aria-hidden="true"><span>AI</span><span>Design</span><span>Development</span><span>Branding</span><span>AI</span><span>Design</span></div>
</section>

<section class="services-detail">
    <?php $services = trionn_get_entries('trionn_service'); $number = 1; while ($services->have_posts()) : $services->the_post();
        $service_id = get_the_ID();
        $asset = trionn_asset_key(get_post_meta($service_id, '_trionn_asset', true));
        $image = trionn_entry_image($service_id, 'images/service-' . $asset . '.webp', 'large');
        $capabilities = array_filter(array_map('trim', explode("\n", get_post_meta($service_id, '_trionn_capabilities', true))));
    ?>
        <article class="service-panel section" id="<?php echo esc_attr(get_post_field('post_name', $service_id)); ?>">
            <div class="shell service-panel__grid">
                <div class="service-panel__media reveal" data-tilt><img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy"><span><?php echo esc_html(str_pad((string) $number, 2, '0', STR_PAD_LEFT)); ?></span></div>
                <div class="service-panel__copy reveal">
                    <p class="eyebrow"><?php esc_html_e('Capability', 'trionn-studio'); ?> <?php echo esc_html($number++); ?></p>
                    <h2><?php the_title(); ?></h2>
                    <p><?php echo esc_html(get_the_excerpt()); ?></p>
                    <?php if (get_the_content()) : ?><div class="rich-copy"><?php the_content(); ?></div><?php endif; ?>
                    <h3><?php esc_html_e('Our core capabilities', 'trionn-studio'); ?></h3>
                    <ul class="capability-list">
                        <?php foreach ($capabilities as $capability) : ?><li><?php echo esc_html($capability); ?><span>↗</span></li><?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </article>
    <?php endwhile; wp_reset_postdata(); ?>
</section>

<section class="section section--cream technology">
    <div class="shell">
        <div class="section-heading reveal"><p class="eyebrow"><?php esc_html_e('Technology stack', 'trionn-studio'); ?></p><h2><?php esc_html_e('Built with performance-first, scalable architecture.', 'trionn-studio'); ?></h2></div>
        <div class="technology__grid">
            <?php
            $stacks = array(
                'AI & Automation' => 'OpenAI APIs, intelligent agents, semantic search, recommendations, n8n workflows',
                'Frontend' => 'React, Next.js, JavaScript, Tailwind CSS, GSAP, Three.js, WebGL',
                'Backend' => 'PHP, Node.js, Express, REST APIs, headless architecture',
                'CMS & Commerce' => 'WordPress, Sanity, Contentful, WooCommerce, Shopify',
                'Cloud & DevOps' => 'AWS, Google Cloud, DigitalOcean, GitHub Actions, CI/CD',
                'Growth systems' => 'HubSpot, SendGrid, CRM automation, API-driven campaigns',
            );
            foreach ($stacks as $title => $copy) : ?>
                <article class="technology__item reveal"><h3><?php echo esc_html($title); ?></h3><p><?php echo esc_html($copy); ?></p></article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section process-section section--dark">
    <div class="shell">
        <div class="section-heading reveal"><p class="eyebrow"><?php esc_html_e('Our process', 'trionn-studio'); ?></p><h2><?php esc_html_e('How we work', 'trionn-studio'); ?></h2></div>
        <div class="process-grid">
            <article class="reveal"><span>01</span><h3><?php esc_html_e('Understand', 'trionn-studio'); ?></h3><p><?php esc_html_e('We listen first, define the right problem, and align goals, context, and constraints.', 'trionn-studio'); ?></p></article>
            <article class="reveal"><span>02</span><h3><?php esc_html_e('Design & build', 'trionn-studio'); ?></h3><p><?php esc_html_e('Insight becomes a coherent system through thoughtful design, interaction, and robust execution.', 'trionn-studio'); ?></p></article>
            <article class="reveal"><span>03</span><h3><?php esc_html_e('Refine & evolve', 'trionn-studio'); ?></h3><p><?php esc_html_e('Detail-driven iteration delivers work that is purposeful, scalable, and made to last.', 'trionn-studio'); ?></p></article>
        </div>
    </div>
</section>
<?php get_footer(); ?>
