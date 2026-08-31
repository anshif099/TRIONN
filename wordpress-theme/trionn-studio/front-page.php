<?php
/**
 * Front page.
 *
 * @package TrionnStudio
 */
get_header();
$hero_title = trionn_page_field('hero_title', 'Designed to mean something.');
?>
<section class="home-hero hero hero--dark">
    <video class="home-hero__video" autoplay muted loop playsinline poster="<?php echo esc_url(trionn_media('images/about/lion.jpg')); ?>">
        <source src="<?php echo esc_url(trionn_media('video/hanging-lion.mp4')); ?>" type="video/mp4">
    </video>
    <div class="home-hero__veil"></div>
    <div class="shell hero__inner">
        <p class="eyebrow hero__eyebrow"><?php echo esc_html(trionn_page_field('hero_kicker', 'Inspire · Innovate · Impact')); ?></p>
        <h1 class="display-title split-title"><?php echo esc_html($hero_title); ?></h1>
        <div class="home-hero__foot">
            <p><?php echo esc_html(trionn_page_field('hero_intro', 'Websites, AI products, brands, and systems built for clarity, scale and impact.')); ?></p>
            <a class="circle-link" href="<?php echo esc_url(home_url('/work/')); ?>"><span><?php esc_html_e('View work', 'trionn-studio'); ?></span><i>↗</i></a>
        </div>
    </div>
    <div class="hero-triad" aria-hidden="true"><span>Inspire</span><span>Innovate</span><span>Impact</span></div>
</section>

<section class="section home-intro">
    <div class="shell split-copy">
        <p class="eyebrow reveal"><?php esc_html_e('About TRIONN', 'trionn-studio'); ?></p>
        <div class="split-copy__body reveal">
            <h2><?php esc_html_e('Focused vision. Measured execution.', 'trionn-studio'); ?></h2>
            <div class="rich-copy"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div>
            <p><?php esc_html_e('We design for longevity—clarity first, craft always, built to scale.', 'trionn-studio'); ?></p>
            <a class="text-link" href="<?php echo esc_url(home_url('/about/')); ?>"><?php esc_html_e('More about us', 'trionn-studio'); ?> <span>↗</span></a>
        </div>
    </div>
    <div class="orbit-strip" aria-hidden="true">
        <?php for ($i = 1; $i <= 9; $i++) : ?>
            <img src="<?php echo esc_url(trionn_media('images/orbit/orbit-' . str_pad((string) $i, 2, '0', STR_PAD_LEFT) . '.jpg')); ?>" alt="" loading="lazy">
        <?php endfor; ?>
    </div>
</section>

<section class="section section--dark facts-section">
    <div class="shell">
        <div class="section-heading reveal"><p class="eyebrow"><?php esc_html_e('Key facts', 'trionn-studio'); ?></p><h2><?php esc_html_e('A snapshot of our experience and impact.', 'trionn-studio'); ?></h2></div>
        <div class="fact-grid">
            <article class="fact reveal"><strong><span data-count="50">0</span>+</strong><p><?php esc_html_e('Projects completed for ambitious brands worldwide.', 'trionn-studio'); ?></p></article>
            <article class="fact reveal"><strong><span data-count="14">0</span>+</strong><p><?php esc_html_e('Years shaping digital direction.', 'trionn-studio'); ?></p></article>
            <article class="fact reveal"><strong><span data-count="90">0</span>%</strong><p><?php esc_html_e('Clients return for a second project.', 'trionn-studio'); ?></p></article>
            <article class="fact fact--media reveal"><video autoplay muted loop playsinline><source src="<?php echo esc_url(trionn_media('video/awards-card-video.mp4')); ?>" type="video/mp4"></video><span><?php esc_html_e('Featured worldwide', 'trionn-studio'); ?></span></article>
        </div>
    </div>
</section>

<section class="section selected-work">
    <div class="shell">
        <div class="section-heading section-heading--row reveal"><div><p class="eyebrow"><?php esc_html_e('Selected work', 'trionn-studio'); ?></p><h2><?php esc_html_e('From idea to outcome.', 'trionn-studio'); ?></h2></div><a class="text-link" href="<?php echo esc_url(home_url('/work/')); ?>"><?php esc_html_e('View all projects', 'trionn-studio'); ?> <span>↗</span></a></div>
        <div class="project-grid project-grid--featured">
            <?php $projects = trionn_get_entries('trionn_project', 6); while ($projects->have_posts()) : $projects->the_post(); get_template_part('template-parts/project-card'); endwhile; wp_reset_postdata(); ?>
        </div>
    </div>
</section>

<section class="section section--dark home-services">
    <video class="home-services__video" autoplay muted loop playsinline><source src="<?php echo esc_url(trionn_media('video/homepage-services-video.mp4')); ?>" type="video/mp4"></video>
    <div class="home-services__shade"></div>
    <div class="shell home-services__content">
        <p class="eyebrow reveal"><?php esc_html_e('What we do best', 'trionn-studio'); ?></p>
        <h2 class="display-subtitle reveal"><?php esc_html_e('Strategy, design and technology working as one.', 'trionn-studio'); ?></h2>
        <ol class="service-index">
            <?php $services = trionn_get_entries('trionn_service'); $number = 1; while ($services->have_posts()) : $services->the_post(); ?>
                <li class="reveal"><span><?php echo esc_html(str_pad((string) $number++, 2, '0', STR_PAD_LEFT)); ?></span><h3><?php the_title(); ?></h3><i>↗</i></li>
            <?php endwhile; wp_reset_postdata(); ?>
        </ol>
        <a class="button button--outline" href="<?php echo esc_url(home_url('/services/')); ?>"><?php esc_html_e('Explore services', 'trionn-studio'); ?> ↗</a>
    </div>
</section>

<section class="section team-preview">
    <div class="shell split-copy">
        <p class="eyebrow reveal"><?php esc_html_e('Our team', 'trionn-studio'); ?></p>
        <div class="split-copy__body reveal"><h2><?php esc_html_e('Different skills. One standard.', 'trionn-studio'); ?></h2><p><?php esc_html_e('A collective shaped by shared standards, not job titles.', 'trionn-studio'); ?></p><a class="text-link" href="<?php echo esc_url(home_url('/about/#team')); ?>"><?php esc_html_e('Meet the team', 'trionn-studio'); ?> <span>↗</span></a></div>
    </div>
    <div class="team-preview__media reveal"><video autoplay muted loop playsinline><source src="<?php echo esc_url(trionn_media('video/team/rushi.mp4')); ?>" type="video/mp4"></video><span>20+</span></div>
</section>
<?php get_footer(); ?>

