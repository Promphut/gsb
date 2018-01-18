<?php
/**
 * Loop Name: Content Post Detail
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title text-center">', '</h1>' ); ?>

		<?php if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
				<time class="entry-date published" datetime="<?php the_field('event_time'); ?>"><?php the_field('event_time'); ?></time>
			</div><!-- .entry-meta -->
			<div class="pinkline"></div>
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'seed' ),
			'after'  => '</div>',
			) );
			?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php seed_entry_footer(); ?>
			<?php the_tags( '<ul class="tags"><li>', '</li><li>', '</li></ul>' ); ?>
			<?php seed_social(); ?>
		</footer><!-- .entry-footer -->
</article><!-- #post-## -->
<script>
	jQuery(document).ready(function ($) {
		var date = $(this).find('.entry-date').text();
		date = date.split(" ")[0];
		date = moment(date, "YYYY-MM-DD").format('D MMM YYYY');
		console.log(date);

		$(this).find('.entry-date').text(date);
		$(this).find('.entry-date').removeClass('none');

		var target = moment("<?php the_field('event_time'); ?>");
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
	});
</script>