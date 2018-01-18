<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package seed
 */

get_header(); ?>
<div class="container">
	<div id="primary" class="entry-content video <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
		<h2 class="entry-title center-align"><?php echo get_the_title(); ?></h2>
		<main id="main" class="site-main -hide-title" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single-video' ); ?>

			<?php //the_post_navigation(); ?>

			<?php
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>

		<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php 
	switch (SEED_BLOG_LAYOUT) {
		case 'rightbar':
			get_sidebar('right'); 
			break;
		case 'leftbar':
			get_sidebar('left'); 
			break;
		case 'full-width':
			break;
		default:
			break;
	}
	?>
</div><!--container-->
<?php get_footer(); ?>

