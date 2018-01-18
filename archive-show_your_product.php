	<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package seed
 */

get_header(); ?>
<div class="syp-head">
	<div class="syp-pink-bg">
	</div>

	<div class="arrow-left">
		<img src="<?php echo get_template_directory_uri(); ?>/img/big-arrow.png" alt="arrow">
	</div>
	<div class="arrow-right">
		<img src="<?php echo get_template_directory_uri(); ?>/img/big-arrow.png" alt="arrow">
	</div>
	<div class="arrow-line-left">
		<img src="<?php echo get_template_directory_uri(); ?>/img/arrow-line.png" alt="arrow-line">
	</div>
	<div class="arrow-line-right">
		<img src="<?php echo get_template_directory_uri(); ?>/img/arrow-line.png" alt="arrow-line">
	</div>


	<div class="container">
		<div class="line"></div>
		<h1>Show Your Products</h1>
		<h2>เพิ่มผลิตภัณฑ์ของคุณ
			<br>ร่วมกับผลิตภัณฑ์ต่างๆเหล่านี้</h2>
		<img class="rocket" src="<?php echo get_template_directory_uri(); ?>/img/syp-rocket.png" alt="showyourproduct">
	</div>

	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="<?php echo get_template_directory_uri(); ?>/img/item-1.png" alt="item">
				<div class="desc">
					<div class="name">ชื่อผลิตภัณฑ์</div>
					<div class="brand">ชื่อแบรนด์</div>
				</div>
			</div>
			<div class="swiper-slide">
				<img src="<?php echo get_template_directory_uri(); ?>/img/item-2.png" alt="item">
				<div class="desc">
					<div class="name">ชื่อผลิตภัณฑ์</div>
					<div class="brand">ชื่อแบรนด์</div>
				</div>
			</div>
			<div class="swiper-slide">
				<img src="<?php echo get_template_directory_uri(); ?>/img/item-3.png" alt="item">
				<div class="desc">
					<div class="name">ชื่อผลิตภัณฑ์</div>
					<div class="brand">ชื่อแบรนด์</div>
				</div>
			</div>
		</div>
	</div>

	<div class="swiper-control">
		<div class="button-prev">
			<i class="fa fa-chevron-left" aria-hidden="true"></i>
		</div>
		<div class="lineWrapper">
			<div class="vertical-line"> </div>
		</div>
		<div class="button-next">
			<i class="fa fa-chevron-right" aria-hidden="true"></i>
		</div>
	</div>
</div>
</div>
<div class="container">
	<div id="primary" class="content-area <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
		<main id="main" class="site-main" role="main">

			<?php if ( have_posts() ) : ?>

				<header class="page-header">
					<?php
					the_archive_title( '<h1 class="page-title entry-title hide">', '</h1>' );
					the_archive_description( '<div class="taxonomy-description">', '</div>' );
					?>
				</header><!-- .page-header -->

<?php echo do_shortcode('[searchandfilter id="657"]'); ?>
	<div class="masonry">
		<?php
		if ((int)SEED_BLOG_COLUMNS > 1) {
			echo '<div class="seed-grid-'.SEED_BLOG_COLUMNS.'">';
			while ( have_posts() ) : the_post();
			get_template_part( 'template-parts/content','card-product');
			endwhile;
			echo '</div>';
		} else {
			while ( have_posts() ) : the_post();
			get_template_part( 'template-parts/content', 'card-product');
			endwhile;
		}
		?>
	</div>

				<?php seed_posts_navigation(); ?>

			<?php else : ?>
				<?php echo do_shortcode('[searchandfilter id="657"]'); ?>
				<?php get_template_part( 'template-parts/content', 'none-product' ); ?>
			<?php endif; ?>

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

<script>
	jQuery(document).ready(function ($) {
		// $('select').css('display', 'block');
		// $('.searchandfilter').children().css('display', 'flex');
		// $('.searchandfilter').find('ul').find('.sf-field-taxonomy-genre').css('flex', '1');
		// $('.searchandfilter').find('ul').find('.sf-field-taxonomy-genre').find('h4').css('display', 'inline-block');
		// $('.searchandfilter').find('ul').find('.sf-field-taxonomy-genre').find('h4').css('margin-right', '16px');

			var slidesPerView = userAgentDetect() ? 2 : 4

		// $('.searchandfilter').children().css('display', 'flex');
		// $('.searchandfilter').find('ul').find('.sf-field-taxonomy-genre').css('flex', '1');
		// $('.searchandfilter').find('ul').find('.sf-field-taxonomy-genre').find('h4').css('display', 'inline-block');
		// $('.searchandfilter').find('ul').find('.sf-field-taxonomy-genre').find('h4').css('margin-right', '16px');

    $(document).ready(function () {
      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: slidesPerView,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      })

      $('.button-next').trigger('click');
    });

    function userAgentDetect() {
      if (window.navigator.userAgent.match(/Mobile/i) ||
        window.navigator.userAgent.match(/iPhone/i) ||
        window.navigator.userAgent.match(/iPod/i) ||
        window.navigator.userAgent.match(/IEMobile/i) ||
        window.navigator.userAgent.match(/Windows Phone/i) ||
        window.navigator.userAgent.match(/Android/i) ||
        window.navigator.userAgent.match(/BlackBerry/i) ||
        window.navigator.userAgent.match(/webOS/i)) {
        return true
      } else {
        return false
      }
    }
	});
</script>