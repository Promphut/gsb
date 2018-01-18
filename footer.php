<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package seed
 */
?>
</div><!--site-content-->

<?php if (is_active_sidebar( 'footbar' ) ) : ?>
	<aside id="footbar" class="site-footbar" role="complementary">
		<div class="container">
			<?php dynamic_sidebar( 'footbar' ); ?>
		</div>
	</aside><!--site-footbar-->

<?php else: ?>
	<div class="site-footer-space"></div>
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<div class="row">
				<div class="col m2 hide-on-small-only">
					<div class="footer-menu">
							<h4 class="title">GSB SMEs Startup</h4>
					</div>
					<?php wp_nav_menu( array( 'theme_location' => 'footer_menu_1', 'menu_id' => 'footer-menu' ) ); ?>
				</div>
				<div class="col m2 hide-on-small-only">
					<div class="footer-menu">
							<h4 class="title">อื่นๆ</h4>
					</div>
					<?php wp_nav_menu( array( 'theme_location' => 'footer_menu_2', 'menu_id' => 'footer-menu' ) ); ?>
				</div>
				<div class="col m2 hide-on-small-only">
					<div class="footer-menu">
							<h4 class="title">ติดต่อเรา</h4>
					</div>
					<?php wp_nav_menu( array( 'theme_location' => 'footer_menu_3', 'menu_id' => 'footer-menu' ) ); ?>
				</div>
				<div class="col m6 s12 right-align">
					<img src="<?php echo get_template_directory_uri(); ?>/img/logo.jpg" class="footer-logo hide-on-small-only" alt="logo">
					<h2 class="footer-intro hide-on-small-only">ธนาคารออมสินมากกว่าการธนาคาร...ธนาคารเพื่อสังคม</h2>
					<ul class="social">
						<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
						<li><a href="#"><i style="font-size:16px;" class="fa ss-line" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div>
			<div class="site-info">
				<div class="row row-footer">
					<div class="col m6 s12">
							<ul class="terms">
								<li><a class="policy-link" target="_blank" href="https://www.gsb.or.th/Policy01.aspx">นโยบายการคุ้มครองข้อมูลส่วนบุคคล และมาตรการรักษาความมั่นคงปลอดภัย</a></li>
							</ul>
					</div>
					<div class="col m6 s12 right-align copy">
						สงวนสิทธิ์ 2558 ธนาคารออมสิน
					</div>
				</div>
			</div>
		</div><!--container-->
	</footer><!--site-footer-->
<?php endif; ?>

</div><!--site-canvas-->
</div><!--#page-->

<?php wp_footer(); ?>

</body>
</html>

<script>
	jQuery(document).ready(function($) {
		$('a').each(function(){
			var href = $(this).attr("href");
			if (href === 'https://www.gsb.or.th/services/RateLoan.aspx') {
				$(this).attr("target","_blank");
			}
		});
	})
</script>