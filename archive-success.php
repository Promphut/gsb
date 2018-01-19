	<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package seed
 */

get_header(); ?>
<div class="section-slide">
	<?php masterslider(6); ?>
</div>
<div class="container">
	<div class="row">
		<div class="col m12 s12">
				<div class="main-header">
					<h2 class="main-title"><?php esc_html_e( 'Success Story', 'seed' ); ?></h2>
				</div>
		</div>
	</div>
</div>
<div class="container">
	<div class="row">
		<div class="col s12 m12">
			<div class="_desktop">
				<?php echo do_shortcode('[searchandfilter id="612"]'); ?>
			</div>

			<div class="_mobile">
					<?php echo do_shortcode('[searchandfilter id="797"]'); ?>
			</div>
		</div>
	</div>
</div>
<div class="container">
	<div id="primary" class="content-area <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
		<main id="main" class="site-main" role="main">
			<div class="row">
			<?php if ( have_posts() ) : ?>

				<header class="page-header">
					<?php
					the_archive_title( '<h1 class="page-title entry-title hide">', '</h1>' );
					the_archive_description( '<div class="taxonomy-description">', '</div>' );
					?>
				</header><!-- .page-header -->

				<?php
				if ((int)SEED_BLOG_COLUMNS > 1) {
					echo '<div class="seed-grid-'.SEED_BLOG_COLUMNS.'">';
					while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content','card-member');
					endwhile;
					echo '</div>';
				} else {
					while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'card-member');
					endwhile;
				}
				?>

				<?php seed_posts_navigation(); ?>

			<?php else : ?>

				<?php get_template_part( 'template-parts/content', 'none' ); ?>

			<?php endif; ?>
			</div>
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
<script>
// jQuery(document).ready(function ($) {
// 	$('select').material_select();
//
// 	$('.searchandfilter').children().css('display', 'flex');
// 	$('.searchandfilter').find('ul').find('.sf-field-post-meta-company_type').css('flex', '1');
// 	$('.searchandfilter').find('ul').find('.sf-field-post-meta-company_type').find('h4').css('display', 'inline-block');
// 	$('.searchandfilter').find('ul').find('.sf-field-post-meta-company_type').find('h4').css('margin-right', '16px');
// });
</script>
<?php get_footer(); ?>
