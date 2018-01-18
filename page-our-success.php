<?php
/**
 * Template Name: Our Success
 *
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package seed
 */

get_header();?>
<div class="section-slide">
	<?php masterslider(6); ?>
</div>
<div class="container">
	<div class="row">
		<div class="col s12">
				<div class="main-header">
						<h2 class="main-title"><?php the_title(); ?></h2>
				</div>
		</div>
	</div>
	<div id="primary" class="content-area">
		<main id="main" class="site-main -hide-title" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
				
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
				
				<?php
					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
</div><!--container-->
<?php get_footer(); ?>