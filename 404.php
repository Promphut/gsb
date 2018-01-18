<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package seed
 */

get_header(); ?>
<div class="section-page-login">
	<div class="container">
		<div id="primary" class="login-area content-area entry-content">
			<main id="main" class="site-main -hide-title" role="main">
				<div class="row">
					<div class="col s12 m12">
						<h1 class="title"><?php esc_html_e( '404', 'seed' ); ?></h1>
						<p class="desc">
							<?php esc_html_e( 'ข้อผิดพลาด 404: ไม่พบหน้าที่ต้องการเข้าถึง', 'seed' ); ?>
						</p>
						<div class="center-align" style="margin-bottom:150px;">
							<a class="btn white pink-text" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php esc_html_e( 'กลับไปหน้าแรก', 'seed' ); ?></a>
						</div>
						<img src="<?php echo get_template_directory_uri(); ?>/img/button.png" class="button" alt="button">
						<img src="<?php echo get_template_directory_uri(); ?>/img/cloud-1.png" class="cloud-1" alt="cloud-1">
						<img src="<?php echo get_template_directory_uri(); ?>/img/rocket.png" class="rocket" alt="rocket">
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" class="arrow" alt="arrow"> -->
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" class="arrow-2" alt="arrow-2"> -->
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" class="arrow-3" alt="arrow-3"> -->
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" class="arrow-4" alt="arrow-4"> -->
						<img src="<?php echo get_template_directory_uri(); ?>/img/cloud-2.png" class="cloud-2" alt="cloud-2">
						<img src="<?php echo get_template_directory_uri(); ?>/img/cloud-3.png" class="cloud-3" alt="cloud-3">
						<img src="<?php echo get_template_directory_uri(); ?>/img/cloud-4.png" class="cloud-4" alt="cloud-3">
					</div>
				</div>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!--container-->
</div>
<?php get_footer(); ?>
