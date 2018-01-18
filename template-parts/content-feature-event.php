<?php
/**
 * Loop Name: Content Feature Event
 */
?>
<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package seed
 */

?>
<article id="post-<?php the_ID(); ?>" <?php post_class('col s12'); ?>>
  <div class="row">
    		<div class="col m6 s12 center-align">
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
			</div>
			<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
			<a href="<?php the_permalink(); ?>" class="btn white-text pink" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark"><?php esc_html_e( 'ดูรายละเอียด', 'seed' ); ?></a>
		</div>
		<div class="col m6 s12">
			<a href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
        <?php if(has_post_thumbnail()) { the_post_thumbnail('full');} else { echo '<img src="' . esc_url( get_template_directory_uri()) .'/img/thumbnail.jpg" alt="'. get_the_title() .'" />'; }?>
      </a>
		</div>
  </div>
</article><!-- #post-## -->
<script>
	jQuery(document).ready(function ($) {
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