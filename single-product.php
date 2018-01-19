<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package seed
 */

get_header(); ?>
<div class="section-slide">
	<?php masterslider(6); ?>
</div>
<div class="container">
	<div class="row product-row">
		<div id="primary" class="entry-content col m8 <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
			<div class="row entry-row">
				<div class="col m9 s12">
					<h2 class="entry-title left-align"><?php echo get_the_title(); ?></h2>
				</div>
				<div class="col m3 right-align hide-on-med-and-down">
					<a href="<?php echo site_url('credit-request') ?>" class="btn pink white-text waves-effect"><?php esc_html_e( 'สนใจสินเชื่อ', 'seed' ); ?></a>
				</div>
				<div class="col m12">
					<?php $output = get_field('money'); ?>
					<h3 class="sub-title">วงเงินสินเชื่อ : <?php echo number_format($output, 0, '.', ','); ?> ล้านบาท</h3>
				</div>
			</div>
			<main id="main" class="site-main -hide-title" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
				<div class="thumb">
					<?php the_post_thumbnail('full'); ?>
				</div>
				<?php the_content(); ?>

				<ul class="collapsible" data-collapsible="expandable">
				<?php if ( get_field('objective') ) : ?>
					<li>
						<div class="collapsible-header"><i class="fa fa-arrow-right" aria-hidden="true"></i><?php esc_html_e( 'วัตถุประสงค์', 'seed' ); ?></div>
						<div class="collapsible-body">
							<ul>
							<?php
							$objectives = get_field('objective');
							if( $objectives ): ?>
							<ul>
								<?php foreach( $objectives as $objectives ): ?>
									<li>- <?php echo $objectives; ?></li>
								<?php endforeach; ?>
							</ul>
							<?php endif; ?>
							</ul>
						</div>
					</li>
				<?php endif; ?>
				<?php
				if( have_rows('product_repeater') ):
				while ( have_rows('product_repeater') ) : the_row();
				?>
					<li>
						<div class="collapsible-header"><i class="fa fa-arrow-right" aria-hidden="true"></i><?php the_sub_field('product_title'); ?></div>
						<div class="collapsible-body"><?php the_sub_field('product_desc'); ?></div>
					</li>
				<?php
				endwhile;
				else :
				endif;
				?>
			</ul>
			<?php endwhile; // End of the loop. ?>
			<div class="section-interest">
				<a href="<?php echo site_url('credit-request'); ?>" class="btn pink white-text waves-effect"><?php esc_html_e( 'สนใจสินเชื่อ', 'seed' ); ?></a>
			</div>
			</main><!-- #main -->
		</div><!-- #primary -->

		<div class="col m4 box-product-listing">
			<h2>ผลิตภัณฑ์อื่น</h2>
			<?php
			$category = get_the_category();

			$query = new WP_Query( array(
					'post_type' => 'product',
					'cat' => $category[0]->cat_ID,
					'posts_per_page' => -1,
					'order' => 'ASC',
					'orderby' => 'title',

			) );
			if ( $query->have_posts() ) { ?>
					<ul class="product-listing">
							<?php while ( $query->have_posts() ) : $query->the_post(); ?>
							<li id="post-<?php the_ID(); ?>">
									<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							</li>
							<?php endwhile;
							wp_reset_postdata(); ?>
					</ul>

		<?php	} ?>
		</div>


	</div>


</div><!--container-->
<script>
	jQuery(document).ready(function ($) {
	    $(".collapsible").find("li").each(function (index, element) {
      $(element).click(function () {
        if ($(element).find(".fa-arrow-right").hasClass("rotate")) {
          $(element).find(".fa-arrow-right").removeClass("rotate")
        } else {
          $(element).find(".fa-arrow-right").addClass("rotate")
        }

        if ($(element).find(".chk-rcm-content").hasClass("collapsed")) {
          $(element).find(".chk-rcm-content").removeClass("collapsed")
        } else {
          $(element).find(".chk-rcm-content").addClass("collapsed")
        }
      })
		});
	});
</script>
<?php get_footer(); ?>
