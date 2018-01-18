	<?php
/**
 * Template Name: Past Event
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package seed
 */

get_header(); ?>

<div class="container">
	<div class="row">
		<div class="col s12">
				<div class="main-header">
						<h2 class="main-title"><?php the_title(); ?></h2>
				</div>
		</div>
	</div>

</div>
<div class="container">
	<div id="primary" class="row <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
		<main id="main" class="site-main" role="main">
			<?php
			$args = array( 'posts_per_page' => 10,'category_name' => 'event');
			$query = new WP_Query( $args );
			while ( $query->have_posts() ) : $query->the_post(); ?>
			<?php $i = get_field('event_time'); ?>
			<?php $datetime = date('Y-m-d H:i:s'); ?>
			<?php 
			if($datetime < date($i)){ ?>
      <?php  }else{ ?>
			<div class="col s12">
				<table class="act-table">
					<tr id="post-<?php the_ID(); ?>" <?php post_class('seed-col'); ?>>
						<td><time class="entry-date published" datetime="<?php the_field('event_time', $p->ID); ?>"><?php the_field('event_time', $p->ID);  ?></time></td>
						<td>
							<a href="<?php the_permalink(); ?>" rel="bookmark">
								<div class="act-text">
									<?php the_title(); ?>
								</div>
								<div class="act-tag green"><?php $categories = get_the_category(); if ( ! empty( $categories ) ) { echo esc_html( $categories[0]->name ); } ?></div>
								<div class="chk-arrow">
									<i class="fa fa-arrow-right" aria-hidden="true"></i>
								</div>
							</a>
						</td>
					</tr>
				</table>
			</div>
      <?php  }
			?>
			<?php endwhile;
			wp_reset_postdata();
			?>
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
<img src="<?php echo get_template_directory_uri() ?>/img/line-chart-1.png" alt="" class="chart-1">
<img src="<?php echo get_template_directory_uri() ?>/img/line-chart-1.png" alt="" class="chart-2">
<script>
		jQuery(document).ready(function ($) {
			$('.act-table').find('tr').each(function () {
					var date = $(this).find('td:first').text();
					date = date.split(" ")[0];
					date = moment(date, "YYYY-MM-DD").format('D MMM YYYY');

					$(this).find('td:first').text(date);
					$(this).find('td:first').removeClass('none');
				})
		});
</script>
<?php get_footer(); ?>
<!-- 
<script>
console.log('test');

jQuery(document).ready(function($) {  
	$(window).on("load",function() {
		$(window).scroll(function() {
			var windowBottom = $(this).scrollTop() + $(this).innerHeight();

			$(".post.type-post").each(function() {
				var postBottom = $(this).offset().top + $(this).outerHeight();
				console.log('postBottom',postBottom);
				console.log('windowBottom',windowBottom);
				if (postBottom < windowBottom) {
					$(this).addClass('slide');
				}
			})
		}).scroll();
	});
});
</script> -->