<?php
/**
 * Site footer.
 *
 * @package TrionnStudio
 */
?>
</main>

<?php if (!is_page('contact')) : ?>
<section class="footer-inquiry section section--cream" id="inquiry">
    <div class="shell">
        <div class="section-heading reveal">
            <p class="eyebrow"><?php esc_html_e('Start a conversation', 'trionn-studio'); ?></p>
            <h2><?php esc_html_e("Let's build something great.", 'trionn-studio'); ?></h2>
            <p><?php esc_html_e('Tell us about your project. We usually reply within one business day.', 'trionn-studio'); ?></p>
        </div>
        <?php get_template_part('template-parts/contact-form', null, array('id' => 'footer-inquiry')); ?>
    </div>
</section>
<?php endif; ?>

<footer class="site-footer">
    <div class="shell site-footer__top">
        <a class="site-footer__email" href="mailto:<?php echo esc_attr(trionn_option('email', 'hello@trionn.com')); ?>"><?php echo esc_html(trionn_option('email', 'hello@trionn.com')); ?><span>↗</span></a>
        <p><?php esc_html_e('Independent digital studio crafting meaningful brand experiences through strategy, design, and technology.', 'trionn-studio'); ?></p>
    </div>
    <div class="shell site-footer__bottom">
        <p>© <?php echo esc_html(wp_date('Y')); ?> TRIONN®</p>
        <div class="footer-socials">
            <?php foreach (array('linkedin', 'instagram', 'facebook', 'dribbble') as $network) : $url = trionn_option($network, '#'); ?>
                <a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html(ucfirst($network)); ?></a>
            <?php endforeach; ?>
        </div>
        <button class="back-to-top" type="button"><?php esc_html_e('Back to top', 'trionn-studio'); ?> ↑</button>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>

