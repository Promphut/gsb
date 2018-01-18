<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package seed
 */

get_header(); ?>
	<?php $b = $_GET['_sft_category']; ?>
	<div class="section-slide">
		<?php masterslider(6); ?>
	</div>
	<div class="container">
		<div class="row">
			<div class="col s12">
				<div class="main-header">
					<h2 class="main-title">
						<?php esc_html_e( 'ผลิตภัณฑ์', 'seed' ); ?>
					</h2>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div id="primary" class="content-area <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
			<div class="row">
				<div class="col l3 m4 s12">
					<?php get_sidebar('left'); ?>
					<!-- <div style="margin-bottom:30px;border-bottom: 1px solid #e2e2e2;padding-bottom:30px;">
						<table class="table-left-side">
							<caption>
								อัตราดอกเบี้ยเงินกู้ขั้นต่ำ
							</caption>
							<thead>
								<tr>
									<th>ประเภทเงินฝาก และวงเงินฝาก</th>
									<th class="right">อัตราดอกเบี้ย (ร้อยละต่อปี)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>ดอกเบี้ยเงินกู้ขั้นต่ำประเภทเงินกู้ที่มีระยะเวลา (MLR) MINIMUM LENDING RATE</td>
									<td>6.500</td>
								</tr>
								<tr>
									<td>ดอกเบี้ยเงินกู้ขั้นต่ำประเภทเงินเบิกเกินบัญชี (MOR)MINIMUM OVERDRAFT RATE</td>
									<td>7.000</td>
								</tr>
								<tr>
									<td>ดอกเบี้ยเงินกู้ลูกค้ารายย่อยชั้นดี (MRR) MINIMUM RETAIL RATE</td>
									<td>7.000</td>
								</tr>
							</tbody>
						</table>
						<div class="since">ทั้งนี้ตั้งแต่วันที่ 23 พ.ค. 60 เป็นต้นไป</div>
					</div> -->
				</div>
				<div class="col l9 m8 s12">
					<main id="main" class="site-main" role="main">

						<?php if ( have_posts() ) : ?>

						<header class="page-header">
							<?php
							the_archive_title( '<h1 class="page-title entry-title hide">', '</h1>' );
							the_archive_description( '<div class="taxonomy-description">', '</div>' );
							?>
						</header>
						<!-- .page-header -->

						<?php
						if ((int)SEED_BLOG_COLUMNS > 1) {
							echo '<div class="seed-grid-'.SEED_BLOG_COLUMNS.'">';
							while ( have_posts() ) : the_post();
							get_template_part( 'template-parts/content','card-excerpt');
							endwhile;
							echo '</div>';
						} else {
							while ( have_posts() ) : the_post();
							get_template_part( 'template-parts/content','product');
							endwhile;
						}
						?>
						<?php seed_posts_navigation(); ?>

						<?php else : ?>

						<?php get_template_part( 'template-parts/content', 'none' ); ?>

						<?php endif; ?>
					</main>
					<!-- #main -->
				</div>
			</div>
		</div>
		<!-- #primary -->

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
	</div>
	<!--container-->
	<?php get_footer(); ?>

	<script>
	jQuery(document).ready(function ($) {
			// $('select').material_select();
	// 		$(window).on("load", function () {
	// 			$(window).scroll(function () {
	// 				var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  //
	// 		$(".product.type-product").each(function() {
	// 			var productBottom = $(this).offset().top + $(this).outerHeight();
  //
	// 			if (productBottom - 400 < windowBottom) {
	// 				$(this).addClass('slide');
	// 			}
	// 		})
	// 	}).scroll();
	// });

	$('input[type=range]').on('input', function () {
		$(this).trigger('change');
		$(this).val(function(index, value) {
						return value
						.replace(/\D/g, "")
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
						;
				});
			});

			var openDropdown = false;
			// $('.select-dropdown').click(function () {
			// 	openDropdown = true;
			// 	if (openDropdown) {
			// 		$('.select-wrapper').find('ul').css('display', 'block');
			// 	}
			// })
      //
			// $('.select-wrapper').mouseenter(function () {
			// 	if (openDropdown) {
			// 		$('.select-wrapper').find('ul').css('display', 'block');
			// 	}
			// }).mouseleave(function () {
			// 	openDropdown = false;
			// 	$('.select-wrapper').find('ul').css('display', 'none');
			// });

			var a = "<?php echo $b ?>";
			console.log(a);
			if (a === "sme") {
				$(".main-title").text("ผลิตภัณฑ์");
			} else {
				$(".main-title").text("ผลิตภัณฑ์/โปรโมชั่น");
			}
			if (a === "product-promotion") {
				$(".main-title").text("โปรโมชั่น");
			}
		});

		function detectmob() {
			if (navigator.userAgent.match(/Android/i)
				|| navigator.userAgent.match(/webOS/i)
				|| navigator.userAgent.match(/iPhone/i)
				|| navigator.userAgent.match(/iPad/i)
				|| navigator.userAgent.match(/iPod/i)
				|| navigator.userAgent.match(/BlackBerry/i)
				|| navigator.userAgent.match(/Windows Phone/i)
			) {
				return true;
			}
			else {
				return false;
			}
		}

// 	$(document).on("keyup","input", function() {
// 			$('input[type=range]').keyup(function(event) {

// 				console.log('test');

// 					// skip for arrow keys
// 					if(event.which >= 37 && event.which <= 40) return;

// 					// format number
// 					$(this).val(function(index, value) {
// 						return value
// 						.replace(/\D/g, "")
// 						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// 						;
// 					});
// 				});
// 		});
// });

	</script>
