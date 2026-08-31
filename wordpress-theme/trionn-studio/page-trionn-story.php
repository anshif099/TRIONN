<?php
/**
 * Name story page.
 *
 * @package TrionnStudio
 */
get_header();
?>
<section class="story-hero hero hero--cream">
    <div class="shell hero__inner">
        <p class="eyebrow"><?php echo esc_html(trionn_page_field('hero_kicker', 'The name story')); ?></p>
        <h1 class="display-title split-title"><?php echo esc_html(trionn_page_field('hero_title', 'The story behind the TRIONN name and the meaning of its mascot.')); ?></h1>
        <p class="hero__intro"><?php echo esc_html(trionn_page_field('hero_intro', 'Three ideas. One fearless direction.')); ?></p>
    </div>
</section>

<section class="section story-intro section--dark">
    <div class="shell split-copy">
        <p class="eyebrow reveal">TRI.ONN</p>
        <div class="split-copy__body reveal"><h2><?php esc_html_e('The power of three.', 'trionn-studio'); ?></h2><div class="rich-copy"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div><p><?php esc_html_e('The three-headed lion brings these ideas together as a symbol of courage, divinity, and focused strength.', 'trionn-studio'); ?></p></div>
    </div>
</section>

<section class="section trimurti-section section--cream">
    <div class="shell">
        <div class="section-heading reveal"><p class="eyebrow">TRI</p><h2><?php esc_html_e('Inspired by the Trimurti.', 'trionn-studio'); ?></h2><p><?php esc_html_e('Brahma, Vishnu, and Mahesh represent creation, preservation, and transformation—the three forces behind enduring work.', 'trionn-studio'); ?></p></div>
        <div class="trimurti-grid">
            <figure class="reveal"><img src="<?php echo esc_url(trionn_media('images/name-story/trimurti-brahma.png')); ?>" alt="Brahma" loading="lazy"><figcaption><?php esc_html_e('Create', 'trionn-studio'); ?></figcaption></figure>
            <figure class="reveal"><img src="<?php echo esc_url(trionn_media('images/name-story/trimurti-vishnu.png')); ?>" alt="Vishnu" loading="lazy"><figcaption><?php esc_html_e('Preserve', 'trionn-studio'); ?></figcaption></figure>
            <figure class="reveal"><img src="<?php echo esc_url(trionn_media('images/name-story/trimurti-shiva.png')); ?>" alt="Shiva" loading="lazy"><figcaption><?php esc_html_e('Transform', 'trionn-studio'); ?></figcaption></figure>
        </div>
    </div>
</section>

<section class="section onn-section section--dark">
    <div class="shell split-copy">
        <div><p class="eyebrow reveal">ONN</p><h2 class="display-subtitle reveal">Om Namo Narayana</h2></div>
        <div class="split-copy__body reveal"><p><?php esc_html_e('In Vedic tradition, the mantra “Om Namo Narayana” carries deep spiritual significance. ONN is drawn from that invocation and grounds the name in devotion and meaning.', 'trionn-studio'); ?></p></div>
    </div>
</section>

<section class="section mascot-section">
    <div class="shell mascot-grid">
        <div class="mascot-copy reveal"><p class="eyebrow"><?php esc_html_e('The mascot', 'trionn-studio'); ?></p><h2><?php esc_html_e('A lion with fearless direction.', 'trionn-studio'); ?></h2><p><?php esc_html_e('Lord Narasimha combines human form with a lion face and claws. Inspired by TRI, the mascot becomes a three-headed lion—a bold identity shaped by strength and meaning.', 'trionn-studio'); ?></p></div>
        <figure class="mascot-image reveal" data-tilt><img src="<?php echo esc_url(trionn_media('images/name-story/narasimha-only.png')); ?>" alt="TRIONN lion mascot" loading="lazy"></figure>
    </div>
</section>
<?php get_footer(); ?>

