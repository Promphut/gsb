<?php
/**
* Template Name: Add Product Page
*/
get_header();?>
<style>
select{
	display: block!important;
}
.site-footer-space {
    height: 90px!important;
}
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
					<div class="col s12 m12">
						<div class="card card-register">
							<div class="card-content">
								<div class="row">
									<div class="col s12">
										<h2 class="main-title left" style="padding:0;z-index:1;">
											<?php the_title(); ?>
										</h2>
                    <?php while ( have_posts() ) : the_post(); ?>

                    <?php get_template_part( 'template-parts/content', 'page' ); ?>

                    <?php
                              // If comments are open or we have at least one comment, load up the comment template.
                              if ( comments_open() || get_comments_number() ) :
                                comments_template();
                              endif;
                            ?>

                      <?php endwhile; // End of the loop. ?>
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
<img src="<?php echo get_template_directory_uri(); ?>/img/bg-rightline.png" class="coin" style="position: absolute; top: 0; z-index: -11111;">
</div>
<script>
  jQuery(document).ready(function ($) {
		// $('select').material_select();
		jQuery("#input_4_1").attr("maxlength", "40");
  });
</script>
<?php get_footer(); ?>
