<?php
/**
 * About page.
 *
 * @package TrionnStudio
 */
get_header();
?>
<section class="about-hero hero hero--dark">
    <picture class="about-hero__lion">
        <source media="(max-width: 700px)" srcset="<?php echo esc_url(trionn_media('images/about/lion-mobile.jpg')); ?>">
        <img src="<?php echo esc_url(trionn_media('images/about/lion.jpg')); ?>" alt="TRIONN lion" fetchpriority="high">
    </picture>
    <div class="about-hero__veil"></div>
    <div class="shell hero__inner">
        <p class="eyebrow"><?php echo esc_html(trionn_page_field('hero_kicker', 'Independent since 2012')); ?></p>
        <h1 class="display-title split-title"><?php echo esc_html(trionn_page_field('hero_title', 'We are an independent digital studio built on clarity, thoughtful craft, and trust earned worldwide.')); ?></h1>
        <p class="hero__intro"><?php echo esc_html(trionn_page_field('hero_intro', 'At the intersection of strategy, design, and technology.')); ?></p>
    </div>
    <p class="about-hero__prompt"><?php esc_html_e('Dare the lion · move to explore', 'trionn-studio'); ?></p>
</section>

<section class="section about-intro">
    <div class="shell split-copy">
        <p class="eyebrow reveal"><?php esc_html_e('Inspire · Innovate · Impact', 'trionn-studio'); ?></p>
        <div class="split-copy__body reveal">
            <h2><?php esc_html_e('We build teams around ideas.', 'trionn-studio'); ?></h2>
            <div class="rich-copy"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div>
            <p><?php esc_html_e('Today, we partner with startups and global brands to design digital products, platforms, and systems that scale with purpose and endure.', 'trionn-studio'); ?></p>
        </div>
    </div>
</section>

<section class="section section--cream values-section">
    <div class="shell">
        <div class="section-heading reveal"><p class="eyebrow"><?php esc_html_e('Our values', 'trionn-studio'); ?></p><h2><?php esc_html_e('What we believe shapes better work.', 'trionn-studio'); ?></h2></div>
        <div class="values-grid">
            <?php
            $values = array(
                'Driven by excellence' => 'High standards, continuous learning, and respect for craft push every project beyond the expected.',
                'Honesty and authenticity' => 'We focus on clarity, transparency, and results we are proud to stand behind.',
                'Designs that last' => 'We balance creativity, technology, and purpose to build systems with long-term value.',
                'Purposeful decisions' => 'Quality and emotional value remain central, even when the easier option is available.',
                'Creativity with impact' => 'We shape ideas that add real value instead of chasing disposable trends.',
                'Experience and attitude' => 'Years of exploration and complex problem-solving inform every new challenge.',
            );
            $value_index = 1;
            foreach ($values as $title => $copy) : ?>
                <article class="value-card reveal"><span><?php echo esc_html(str_pad((string) $value_index++, 2, '0', STR_PAD_LEFT)); ?></span><h3><?php echo esc_html($title); ?></h3><p><?php echo esc_html($copy); ?></p></article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section founder-section section--dark">
    <div class="shell founder-grid">
        <figure class="founder-image reveal"><picture><source media="(max-width: 700px)" srcset="<?php echo esc_url(trionn_media('images/founder-mobile.webp')); ?>"><img src="<?php echo esc_url(trionn_media('images/founder.webp')); ?>" alt="Sunny Rathod, Founder and CEO" loading="lazy"></picture></figure>
        <div class="founder-copy reveal"><p class="eyebrow"><?php esc_html_e('Founder & CEO', 'trionn-studio'); ?></p><h2><?php esc_html_e('Sunny Rathod', 'trionn-studio'); ?></h2><p><?php esc_html_e('Award-winning designer and Awwwards Jury member, shaping digital experiences and brand systems for global companies.', 'trionn-studio'); ?></p><blockquote><?php esc_html_e('True growth is not about adding more, but about becoming more.', 'trionn-studio'); ?></blockquote></div>
    </div>
</section>

<section class="team-lab" id="team" data-team-lab>
    <div class="team-lab__header shell reveal"><div><p class="eyebrow"><?php esc_html_e('Our team', 'trionn-studio'); ?></p><h2><?php esc_html_e('Different skills. One standard.', 'trionn-studio'); ?></h2></div><p><?php esc_html_e("Drag a member into the scanner to identify them. On mobile, tap a card.", 'trionn-studio'); ?></p></div>
    <div class="team-lab__stage">
        <div class="scanner" data-scanner>
            <div class="scanner__grid"></div><div class="scanner__line"></div>
            <div class="scanner__idle"><span><?php esc_html_e('Drag a member to identify', 'trionn-studio'); ?></span></div>
            <video class="scanner__video" muted playsinline loop></video>
            <div class="scanner__identity"><strong></strong><span></span></div>
        </div>
        <div class="team-lab__cards">
            <?php $team = trionn_get_entries('trionn_team'); $team_index = 0; while ($team->have_posts()) : $team->the_post();
                $person_id = get_the_ID();
                $asset = trionn_asset_key(get_post_meta($person_id, '_trionn_asset', true));
                $role = get_post_meta($person_id, '_trionn_role', true);
                $video_override = get_post_meta($person_id, '_trionn_video_url', true);
                $video = $video_override ?: trionn_media('video/team/' . $asset . '.mp4');
                $image = trionn_entry_image($person_id, 'images/team/' . $asset . '.webp', 'trionn-person');
            ?>
                <article class="team-orbit-card" tabindex="0" role="button" style="--team-index:<?php echo esc_attr($team_index++); ?>" data-team-card data-name="<?php echo esc_attr(get_the_title()); ?>" data-role="<?php echo esc_attr($role); ?>" data-video="<?php echo esc_url($video); ?>">
                    <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" draggable="false" loading="lazy"><span><?php the_title(); ?></span>
                </article>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
    </div>
</section>

<section class="section awards-section section--cream">
    <div class="shell">
        <div class="section-heading reveal"><p class="eyebrow"><?php esc_html_e('Awards recognition', 'trionn-studio'); ?></p><h2><?php esc_html_e('Recognition follows work done with care.', 'trionn-studio'); ?></h2></div>
        <div class="awards-list">
            <article class="reveal"><h3>Awwwards</h3><p>Site of the Day · Developer Award · 4× Honorable Mention</p></article>
            <article class="reveal"><h3>The FWA</h3><p>FWA of the Day</p></article>
            <article class="reveal"><h3>CSS Design Awards</h3><p>2× Website of the Day · UI · UX · Innovation</p></article>
            <article class="reveal"><h3>GSAP</h3><p>Site of the Week · Site of the Day</p></article>
            <article class="reveal"><h3>Codrops</h3><p>2× Featured</p></article>
        </div>
    </div>
</section>

<section class="section culture-section section--dark">
    <div class="shell section-heading reveal"><p class="eyebrow"><?php esc_html_e('Inside the studio', 'trionn-studio'); ?></p><h2><?php esc_html_e('Work hard. Play loud.', 'trionn-studio'); ?></h2></div>
    <div class="culture-gallery">
        <?php for ($i = 1; $i <= 11; $i++) : ?><figure class="reveal"><img src="<?php echo esc_url(trionn_media('gallery/gallery-' . str_pad((string) $i, 2, '0', STR_PAD_LEFT) . '.webp')); ?>" alt="TRIONN studio culture" loading="lazy"></figure><?php endfor; ?>
    </div>
</section>
<?php get_footer(); ?>
