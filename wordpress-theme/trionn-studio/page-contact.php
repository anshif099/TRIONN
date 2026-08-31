<?php
/**
 * Contact page.
 *
 * @package TrionnStudio
 */
get_header();
?>
<section class="contact-hero hero hero--dark">
    <video class="contact-hero__video" autoplay muted loop playsinline><source src="<?php echo esc_url(trionn_media('video/form-background-video.mp4')); ?>" type="video/mp4"></video>
    <div class="contact-hero__shade"></div>
    <div class="shell hero__inner">
        <p class="eyebrow"><?php echo esc_html(trionn_page_field('hero_kicker', 'Start a conversation')); ?></p>
        <h1 class="display-title split-title"><?php echo esc_html(trionn_page_field('hero_title', "Let's start something.")); ?></h1>
        <p class="hero__intro"><?php echo esc_html(trionn_page_field('hero_intro', 'We collaborate with teams who value clarity, craft, and long-term thinking.')); ?></p>
    </div>
</section>

<section class="section section--cream contact-form-section">
    <div class="shell contact-form-grid">
        <div class="section-heading reveal"><p class="eyebrow"><?php esc_html_e("Let's work together", 'trionn-studio'); ?></p><h2><?php esc_html_e("We'd love to hear about your project.", 'trionn-studio'); ?></h2><div class="rich-copy"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div></div>
        <div class="reveal"><?php get_template_part('template-parts/contact-form', null, array('id' => 'contact-inquiry')); ?></div>
    </div>
</section>

<section class="section contact-details section--dark">
    <div class="shell contact-details__grid">
        <article class="reveal"><p class="eyebrow"><?php esc_html_e('Location', 'trionn-studio'); ?></p><h2>TRIONN</h2><p><?php echo nl2br(esc_html(trionn_option('address', 'Rajkot, Gujarat, India.'))); ?></p><a class="text-link" href="https://maps.google.com/?q=<?php echo rawurlencode(trionn_option('address', 'Rajkot, Gujarat, India')); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e('Open in maps', 'trionn-studio'); ?> ↗</a></article>
        <article class="reveal"><p class="eyebrow"><?php esc_html_e('Join us', 'trionn-studio'); ?></p><h2><?php esc_html_e('Care deeply about craft?', 'trionn-studio'); ?></h2><p><?php esc_html_e('Send a short note, your work, and the kind of problems you enjoy solving.', 'trionn-studio'); ?></p><a class="site-footer__email" href="mailto:<?php echo esc_attr(trionn_option('email', 'hello@trionn.com')); ?>"><?php echo esc_html(trionn_option('email', 'hello@trionn.com')); ?> ↗</a></article>
    </div>
</section>

<section class="section faq-section">
    <div class="shell faq-grid">
        <div class="section-heading reveal"><p class="eyebrow"><?php esc_html_e('Questions', 'trionn-studio'); ?></p><h2><?php esc_html_e('Common things people ask before we begin.', 'trionn-studio'); ?></h2></div>
        <div class="accordion">
            <?php
            $faqs = array(
                'What kind of work do you take on?' => 'We partner on branding, websites, AI products, and digital systems where clarity, craft, and execution matter.',
                'Who do you usually work with?' => 'We work with startups and established brands that value thoughtful design and long-term impact.',
                'How do projects typically begin?' => 'With a conversation. We understand goals, context, and constraints before defining the path forward.',
                'Do you partner with agencies long-term?' => 'Yes. We support agencies through ongoing design, development, and creative technology engagements.',
                'Can we sign an NDA before starting?' => 'Yes. We are comfortable signing NDAs and treat all discussions and materials as confidential.',
                'How are projects priced and paid for?' => 'Projects are scoped by complexity and delivered through milestone-based payments, beginning with a deposit.',
            );
            foreach ($faqs as $question => $answer) : ?>
                <article class="accordion__item reveal"><button type="button" aria-expanded="false"><span><?php echo esc_html($question); ?></span><i>+</i></button><div class="accordion__answer"><p><?php echo esc_html($answer); ?></p></div></article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php get_footer(); ?>

