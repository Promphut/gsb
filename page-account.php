<?php
/**
* Template Name: Account Page
*/
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
</style>
<div class="section-account">
	<div class="container">
		<div id="primary" class="content-area entry-content">
			<main id="main" class="site-main -hide-title" role="main">
				<div class="row row-note">
					<div class="col m12">
						<h4 class="right-align note">* ธนาคารจะไม่อนุญาตให้มีการเปิดเผยข้อมูลส่วนตัวของท่านแก่บุคคลภายนอก</h4>
					</div>
				</div>
				<div class="row">
					<div class="col s12 m12">
						<div class="card card-register">
							<div class="card-content">
								<?php while ( have_posts() ) : the_post(); ?>
									<?php get_template_part( 'template-parts/content', 'page' ); ?>
								<?php endwhile; // End of the loop. ?>
							</div>
						</div>
					</div>
				</div>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!--container-->
	<img src="<?php echo get_template_directory_uri(); ?>/img/coin.png" class="coin">
	<img src="<?php echo get_template_directory_uri(); ?>/img/bank.png" class="bank">
</div>
<?php get_footer(); ?>


<script>
jQuery(document).ready(function ($) {
	$(".um-account-meta.radius-3").addClass("hidden");

	$(".um-account-icontip").find('.um-faicon-user').replaceWith("<div class='um-account-text'>ข้อมูลส่วนตัว</div>");
	$(".um-account-icontip").find('.um-faicon-asterisk').replaceWith("<div class='um-account-text'>แก้ไขรหัสผ่าน</div>");
	$(".um-account-icontip").find('.um-faicon-trash-o').replaceWith("<div class='um-account-text'>ลบบัญชี</div>");
});
</script>
