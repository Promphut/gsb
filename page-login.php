<?php
/**
* Template Name: Logins Page
*/
get_header();?>
<div class="section-page-login">
	<div class="container">
		<div id="primary" class="login-area content-area entry-content">
			<main id="main" class="site-main -hide-title" role="main">
				<div class="row">
					<div class="col s12 m12">
						<div class="card">
							<div class="card-content">
								<?php while ( have_posts() ) : the_post(); ?>
									<?php get_template_part( 'template-parts/content', 'page' ); ?>
								<?php endwhile; // End of the loop. ?>
							</div>
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
<script>
	jQuery(document).ready(function($) {
	$(".um-error-code-invalid_username a").empty();
	$(".um-error-code-incorrect_password a").empty();
	});
</script>
<?php get_footer(); ?>
