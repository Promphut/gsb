<?php
/**
 * The template for displaying archive pages.
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
						<?php the_archive_title( '<h2 class="main-title">', '</h2>' ); ?>
				</div>
		</div>
	</div>

</div>
<div class="container">
	<div id="primary" class="row <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
		<main id="main" class="site-main" role="main">
			<?php
      $date_now = date('Y-m-d H:i:s');
      $time_now = strtotime($date_now);
      $time_next_week = strtotime('+31 day', $time_now);
      $date_next_week = date('Y-m-d H:i:s', $time_next_week);
      $posts = get_posts(array(
      	'posts_per_page'	=> -1,
				'category_name'			=> 'event',
      	'meta_query' 		=> array(
      		array(
      	        'key'			=> 'event_time',
      	        'compare'		=> 'BETWEEN',
      	        'value'			=> array( $date_now, $date_next_week ),
      	        'type'			=> 'DATETIME'
      	    )
          ),
      	'order'				=> 'ASC',
      	'orderby'			=> 'meta_value',
      	'meta_key'			=> 'event_time',
      	'meta_type'			=> 'DATETIME'
      ));
			if( $posts ): ?>
				<?php $i = 0; ?>
				<?php foreach( $posts as $p ): ?>
				<?php if ( $i == 0 ) { ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class('col s12'); ?>>
					<div class="row" style="margin-bottom:0;">
						<div class="col m12 s12 countdown-text">
							<span class="point">•</span> 
							<h2 class="cd-title"><?php esc_html_e( 'Countdown', 'seed' ); ?></h2>
						</div>
					</div>
					<div class="act-counter">
						<div class="counter">
							<div class="counterBox">
								<div class="time" id="day">
									<div class="box">
										1
									</div>
									<div class="box">
										0
									</div>
								</div>
								<div class="unit">
									days
								</div>
							</div>
							<div class="counterBox">
								<div class="time" id="hour">
									<div class="box">
										1
									</div>
									<div class="box">
										0
									</div>
								</div>
								<div class="unit">
									hours
								</div>
							</div>
							<div class="counterBox">
								<div class="time" id="min">
									<div class="box">
										1
									</div>
									<div class="box">
										0
									</div>
								</div>
								<div class="unit">
									minutes
								</div>
							</div>
							<div class="counterBox">
								<div class="time" id="sec">
									<div class="box">
										1
									</div>
									<div class="box">
										0
									</div>
								</div>
								<div class="unit">
									seconds
								</div>
							</div>
						</div>
						<a class="act-img" href="<?php echo $p->guid ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
							<?php if(has_post_thumbnail()) { the_post_thumbnail('full');} else { echo '<img src="' . esc_url( get_template_directory_uri()) .'/img/thumbnail.jpg" alt="'. get_the_title() .'" />'; }?>
						</a>
						<div class="act-detail">
							<h2 class="entry-title text"><?php echo $p->post_title ?></h2>
							<a href="<?php echo $p->guid ?>" class="btn white-text pink act-btn" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark" ><?php esc_html_e( 'ดูรายละเอียด', 'seed' ); ?></a>
						</div>
					</div>
				</article><!-- #post-## -->
				<script>
					jQuery(document).ready(function ($) {
						var target = moment("<?php the_field('event_time', $p->ID); ?>");
						counter();

						setInterval(function () {
							counter()
						}, 1000);

						$(".act-table").find("tr").each(function (index, element) {
							$(element).find("a").mouseenter(function () {
								$(element).find(".fa-arrow-right").addClass("move");
							})

							$(element).find("a").mouseleave(function () {
								$(element).find(".fa-arrow-right").removeClass("move");
							})
						});

						function counter() {
							var diff = moment.utc(target.diff(moment()))

							$("#day").find(".box:first").text(parseInt(diff.format('DD') / 10));
							$("#day").find(".box:last").text(diff.format('DD') % 10 - 1);

							$("#hour").find(".box:first").text(parseInt(diff.format('HH') / 10));
							$("#hour").find(".box:last").text(diff.format('HH') % 10);

							$("#min").find(".box:first").text(parseInt(diff.format('mm') / 10));
							$("#min").find(".box:last").text(diff.format('mm') % 10);

							$("#sec").find(".box:first").text(parseInt(diff.format('ss') / 10));
							$("#sec").find(".box:last").text(diff.format('ss') % 10);
						}

						$('.act-table').find('tr').each(function(){
							var date = $(this).find('td:first').text();
							date = date.split(" ")[0];
							date = moment(date, "YYYY-MM-DD").format('D MMM YYYY');

							$(this).find('td:first').text(date);
							$(this).find('td:first').removeClass('none');
						})
					});
				</script>
				<?php } else { ?>
					<?php $date = get_field('event_time'); ?>
					<div class="col s12">
						<table class="act-table">
							<tr id="post-<?php the_ID(); ?>" <?php post_class('seed-col'); ?>>
								<td><time class="entry-date published none" datetime="<?php the_field('event_time', $p->ID); ?>"><?php the_field('event_time', $p->ID);  ?></time></td>
								<td>
									<a href="<?php echo $p->guid ?>" rel="bookmark">
										<div class="act-text">
											<?php echo $p->post_title ?>
										</div>
										<?php if( get_field('event_type', $p->ID) == 'Grooming' ): ?><div class="act-tag grooming">Grooming</div><?php endif; ?></span><?php if( get_field('event_type', $p->ID) == 'Training' ): ?><div class="act-tag training">Training</div><?php endif; ?>
										<div class="chk-arrow">
											<i class="fa fa-arrow-right" aria-hidden="true"></i>
										</div>
									</a>
								</td>
							</tr>
						</table>
					</div>
				<?php }
				 ?>
				<?php $i++; ?>
				<?php endforeach; ?>
			<?php endif; ?>
				<div class="col m12 s12">
					<a href="<?php echo site_url('past-event'); ?>" class="btn-pre-event"><i class="fa fa-arrow-left" aria-hidden="true"></i> Previous Activities</a>
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
<img src="<?php echo get_template_directory_uri() ?>/img/line-chart-1.png" alt="" class="chart-1">
<img src="<?php echo get_template_directory_uri() ?>/img/line-chart-1.png" alt="" class="chart-2">
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