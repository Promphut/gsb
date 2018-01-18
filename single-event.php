<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package seed
 */

get_header(); ?>
<div class="post-thumbnail">
	<?php the_post_thumbnail('full'); ?>
</div>
<div class="container">
	<div id="primary" class="entry-content <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
		<h2 class="entry-title center-align"><?php echo get_the_title(); ?></h2>
		<main id="main" class="site-main -hide-title" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single-event' ); ?>

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
<div class="section-joinclub center-align">
	<h2 class="title white-text">สนใจสมัครเข้าร่วมเป็นส่วนหนึ่งกับ SMEs Startup Club</h2>
	<a href="<?php echo site_url('register'); ?>" class="btn center-align white pink-text waves-effect waves-light">Join SMEs Startup Club</a>
</div>
<?php get_footer(); ?>

