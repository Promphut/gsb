<?php
/**
* Template Name: Profile Page
*/
acf_form_head();
get_header();?>
<style>
	.um-field-label label {
		font-size: 18px!important;
	}
	.um-um_account_id.um input[type=submit].um-button, .um-um_account_id.um input[type=submit].um-button:focus, .um-um_account_id.um a.um-button, .um-um_account_id.um a.um-button.um-disabled:hover, .um-um_account_id.um a.um-button.um-disabled:focus, .um-um_account_id.um a.um-button.um-disabled:active {
		background: #EC068D !important;
		font-family: "rsuregular";
		font-size: 18px;
	}
	.um-um_account_id.um .um-form input[type=text], .um-um_account_id.um .um-form input[type=tel], .um-um_account_id.um .um-form input[type=number], .um-um_account_id.um .um-form input[type=password], .um-um_account_id.um .um-form textarea, .um-um_account_id.um .upload-progress, .select2-container .select2-choice, .select2-drop, .select2-container-multi .select2-choices, .select2-drop-active, .select2-drop.select2-drop-above {
	color: #222;
	border: none !important;
	border-bottom: 2px solid #EC068D !important;
	font-family: "rsuregular";
	font-size: 18px !important;
}
	div.uimob800 .um-account-meta a, div.uimob800 .um-account-meta img {
		height: auto;
		border-radius: 50%;
		border: none;
		margin: 0 auto !important;
	}
	div.uimob800 .um-account-side {
		width: 20%;
	}
	.um-account p.um-notice {
		font-family: "rsuregular";
    color: #fff;
    background: #cc157f;
	}

	.um-field-error {
		font-family: "rsuregular";
		font-size: 18px;
	}
	.um-account-profile-link {
		display: none;
	}
</style>
<div class="section-account">
	<div class="container">
		<div id="primary" class="content-area entry-content">
			<main id="main" class="site-main -hide-title" role="main">
				<div class="row">
					<?php
					$user_id = get_current_user_id();
					$company_name = get_field('company_name', 'user_'. $user_id );
					$company_desc = get_field('company_desc', 'user_'. $user_id );
						$attachment_id = get_field('company_logo', 'user_'. $user_id );
						$size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
						$company_logo = wp_get_attachment_image_src( $attachment_id, $size );

					?>
					<div class="col s2 m2">
						<div class="center-align">
							<?php if (isset($company_logo)) { ?>
								<img class="profile-img" src="<?php echo $company_logo[0]; ?>" alt="Logo">
							<?php } else { ?>
								<img src="<?php echo get_template_directory_uri() ?>/img/profile-logo.png" alt="Logo">
							<?php }
							 ?>
						</div>
					</div>
					<div class="col s10 m10">
						<?php if (isset($company_name)) { ?>
							<h3 class="profile-title"><?php echo $company_name; ?></h3><a class="profile-edit" href="<?php echo site_url('profile/edit') ?>">แก้ไข</a>
						<?php } else { ?>
							<h3 class="profile-title">ชื่อบริษัท</h3><a class="profile-edit" href="<?php echo site_url('profile/edit') ?>">แก้ไข</a>
						<?php }
							?>
						<?php if (isset($company_name)) { ?>
							<p class="profile-desc"><?php echo $company_desc; ?></p>
						<?php } else { ?>
							<p class="profile-desc">คำอธิบายบริษัท</p>
						<?php }
							?>
					</div>
				</div>
				<div class="row">
					<div class="col s12 m12">
						<div class="card card-register">
							<div class="card-content">
								<div class="row">
									<div class="col s12">
										<h2 class="main-title left" style="padding:0;z-index:1;">
											<h3 class="my-product"><span>•</span>My product</h3>
										</h2>
										<p class="my-product-desc">แนะนำทุกคนให้รู้จักกับแบรนด์และผลิตภัณฑ์เด่นของคุณกันดีกว่า.. (ใส่ได้สูงสุด 5 ผลิตภัณฑ์)</p>
										<hr>
									</div>
								</div>
								<div class="row">
									<?php
									 if ( is_user_logged_in() ): global $current_user; wp_get_current_user(); $author_query = array('posts_per_page' => '-1','author' => $current_user->ID, 'post_type' => 'show_your_product', 'post_status' => array( 'publish' )); $author_posts = new WP_Query($author_query); while($author_posts->have_posts()) : $author_posts->the_post();
									?>
									<?php $status = get_post_status($i); ?>
										<div class="col m5ths s6">
											<a href="#<?php echo get_the_ID(); ?>" rel="modal:open">
												<div class="valign-wrapper profile-product-box z-depth-1" style="height:150px;background-image: url('<?php the_post_thumbnail_url(); ?>');background-size:cover;background-position:50% 50%;">
												</div>
												<div id="<?php echo get_the_ID(); ?>" class="modal">
													<?php echo do_shortcode( '[gravityform id="4" update ajax="true"]' ); ?>
												</div>
											</a>
										</div>
									<?php
									    endwhile;
									else :
									    echo "not logged in";
									endif;
									?>
									<?php
									 if ( is_user_logged_in() ): global $current_user; wp_get_current_user(); $author_query = array('posts_per_page' => '-1','author' => $current_user->ID, 'post_type' => 'show_your_product', 'post_status' => array( 'pending' )); $author_posts = new WP_Query($author_query); while($author_posts->have_posts()) : $author_posts->the_post();
									?>
									<?php $status = get_post_status($i); ?>
										<div class="col m5ths s6">
											<div class="valign-wrapper profile-product-box z-depth-1" style="height:150px;background-image: url('<?php the_post_thumbnail_url(); ?>');background-size:cover;background-position:50% 50%;">
												<span class="draft">กำลังคัดเลือก</span>
											</div>
										</div>
									<?php
									    endwhile;
									else :
									    echo "not logged in";
									endif;
									?>
									<?php
									 if ( is_user_logged_in() ): global $current_user; wp_get_current_user(); $author_query = array('posts_per_page' => '-1','author' => $current_user->ID, 'post_type' => 'show_your_product', 'post_status' => array( 'draft' )); $author_posts = new WP_Query($author_query); while($author_posts->have_posts()) : $author_posts->the_post();
									?>
									<?php $status = get_post_status($i); ?>
										<div class="col m5ths s6">
											<a href="#<?php echo get_the_ID(); ?>" rel="modal:open">
												<div class="valign-wrapper profile-product-box z-depth-1" style="height:150px;background-image: url('<?php the_post_thumbnail_url(); ?>');background-size:cover;background-position:50% 50%;">
													<span class="draft">ไม่ผ่าน <br /> สาเหตุที่ไม่ผ่านการคัดเลือก <br /> <?php the_field('reason'); ?></span>
												</div>
												<div id="<?php echo get_the_ID(); ?>" class="modal">
													<?php echo do_shortcode( '[gravityform id="4" update ajax="true"]' ); ?>
												</div>
											</a>
										</div>
									<?php
									    endwhile;
									else :
									    echo "not logged in";
									endif;
									?>
										<div class="col m5ths s6">
											<a href="<?php echo site_url('profile/add-product') ?>">
												<div class="valign-wrapper profile-product-box z-depth-1" style="height:150px;">
													<span class="center-align pink-text"  style="margin: 0 auto;">+</span>
												</div>
											</a>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<!-- #main -->
		</div>
		<!-- #primary -->
	</div>
	<!--container-->
</div>
</div>
<script>
	jQuery(document).ready(function ($) {
		$('select').material_select();
	});
</script>
<?php get_footer(); ?>
