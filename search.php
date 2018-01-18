<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package seed
 */

get_header(); ?>

<div class="container">
	<div class="row">
		<div class="col s12">
				<div class="main-header">
					<div class="container">
						<h2 class="main-title"><?php printf( esc_html__( 'Search for: %s', 'seed' ), '<span>' . get_search_query() . '</span>' ); ?></h2>
					</div>
				</div>
		</div>
	</div>
</div>
<div class="container">
	<div id="primary" class="content-area">
		<div class="row">
			<div class="col m3">
				<?php get_sidebar('right'); ?>
			</div>	
			<div class="col m9">
				<main id="main" class="site-main" role="main">
						<?php if ( have_posts() ) : ?>
				
							<?php /* Start the Loop */ ?>
							<?php while ( have_posts() ) : the_post(); ?>
				
								<?php
								/**
									* Run the loop for the search to output the results.
									* If you want to overload this in a child theme then include a file
									* called content-search.php and that will be used instead.
									*/
								get_template_part( 'template-parts/content' );
								?>
				
							<?php endwhile; ?>
				
							<?php seed_posts_navigation(); ?>
				
						<?php else : ?>
				
							<?php get_template_part( 'template-parts/content', 'none' ); ?>
				
						<?php endif; ?>
				
						</main><!-- #main -->
					</div><!-- #primary -->
			</div>
		</div>
</div><!--container-->
<?php get_footer(); ?>