<?php
/**
* Template Name: Dashboard Page
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
		<div id="primary" class="content-area">
			<main id="main" class="site-main -hide-title" role="main">
				<div class="row">
					<div class="col m12 s12">
						<h3 class="welcome-text"><?php esc_html_e( 'ยินดีต้อนรับคุณ', 'seed' ); ?> <span class="name"><?php echo um_user('first_name', 'html'); ?> <?php echo um_user('last_name', 'html'); ?>!</span></h3>
						<!-- <p class="welcome-desc">ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลกกับวงการ Startup และ ร่วมเป็นส่วนหนึ่งของทีมที่พร้อมเติบโตอย่างก้าวกระโดด และกำลังต้องการคนอย่างคุณมา ร่วมทีม เพื่อ "สร้าง" สิ่งดีๆ ไปพร้อมๆ กัน ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมา</p> -->
						<!-- <?php do_action('um_account_user_photo_hook', $args ); ?> -->
						<!-- <div class="com-line"></div> -->
						<!-- <h3 class="company-name"><?php echo um_user('comname', 'html'); ?></h3> -->
						<!-- <div class="center-align"><a class="edit-company" href="<?php echo site_url('user'); ?>"><i class="fa fa-arrow-right" aria-hidden="true"></i> แก้ไขประวัติบริษัท</a></div> -->
					</div>
				</div>
				<div class="row">
					<div class="col s12 m8">
						<div class="card card-register card-border" style="min-height: 398px;">
							<div class="card-content">
								<h3 class="card-title calendar"><?php esc_html_e( 'Incoming Activities', 'seed' ); ?></h3>
								<div class="schedule z-depth-3">
									<?php
									$args = array( 'posts_per_page' => 4,'category_name' => 'event');
									$query = new WP_Query( $args );
									while ( $query->have_posts() ) : $query->the_post(); ?>
										<?php get_template_part( 'template-parts/content', 'home-event');
									endwhile;
									wp_reset_postdata();
									?>
									<!-- <div class="row schedule-row">
										<div class="col s3"><span class="time">8 พ.ย. 60</span></div>
										<div class="col s9"><span class="program">รายละเอียดโปรแกรม</span> <span class="new badge green" data-badge-caption="">GROOMING</span></div>
									</div>
									<div class="row schedule-row">
										<div class="col s3"><span class="time">8 พ.ย. 60</span></div>
										<div class="col s9"><span class="program">รายละเอียดโปรแกรม</span> <span class="new badge purple" data-badge-caption="">TRANING</span></div>
									</div>
									<div class="row schedule-row">
										<div class="col s3"><span class="time">8 พ.ย. 60</span></div>
										<div class="col s9"><span class="program">รายละเอียดโปรแกรมรายละเอียดโปรแกรมรายละเอียดโปรแกรมรายละเอียดโปรแกรมรายละเอียดโปรแกรมรายละเอียดโปรแกรมรายละเอียดโปรแกรมรายละเอียดโปรแก</span> <span class="new badge purple" data-badge-caption="">TRANING</span></div>
									</div>
									<div class="row schedule-row">
										<div class="col s3"><span class="time">8 พ.ย. 60</span></div>
										<div class="col s9"><span class="program">รายละเอียดโปรแกรม</span> <span class="new badge green" data-badge-caption="">GROOMING</span></div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
					<div class="col s12 m4">
						<div class="card card-register card-border card-credit">
							<div class="card-content valign-wrapper" style="height:400px;">
									<a class="center-align btn white pink-text" href="<?php echo site_url('credit-request'); ?>" style="margin: 0 auto;">สนใจสินเชื่อ</a>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<!-- <div class="col s12 m4">
						<div class="card card-register card-marketplace">
							<div class="card-content valign-wrapper">
								<h4 class="center-align comingsoon" style="margin: 0 auto;"><?php esc_html_e( 'Marketplace', 'seed' ); ?><br /><span style="font-family: 'rsuregular';font-size: 20px;"><?php esc_html_e( 'E-marketplace is under construction.', 'seed' ); ?></span></h4>
							</div>
						</div>
					</div> -->
					<div class="col s12 m12">
						<div class="card card-register card-border">
							<div class="card-content">

								<div class="cardd-title">
									<h3 class="card-title product"><?php esc_html_e( 'Show Your Products', 'seed' ); ?></h3>
									<a href="/profile" class="btn btn-all-my-product _desktop"><?php esc_html_e( 'ดูผลิตภัณฑ์ของคุณ', 'seed' ); ?></a>
									<div class="chk-arrow _mobile">
										<a href="/profile"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>	
									</div>
								</div>
								<div class="row">
									<div class="col m6 s12">
										<p class="product-desc"><?php esc_html_e( 'เพิ่มผลิตภัณฑ์ของคุณ เพื่อแสดงในหน้า Show Your Products ร่วมกับผลิตภัณฑ์ต่างๆ เหล่านี้', 'seed' ); ?></p>
									</div>
									<div class="col m3 s6">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product-6.png" alt="" class="responsive-img">
									</div>
									<div class="col m3 s6">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product-1.png" alt="" class="responsive-img">
									</div>
									<div class="col m3 s6">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product-2.png" alt="" class="responsive-img">
									</div>
									<div class="col m3 s6">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product-3.png" alt="" class="responsive-img">
									</div>
									<div class="col m3 s6">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product-4.png" alt="" class="responsive-img">
									</div>
									<div class="col m3 s6">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product-5.png" alt="" class="responsive-img">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
				<?php endwhile; // End of the loop. ?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!--container-->
<img src="<?php echo get_template_directory_uri(); ?>/img/bg-rightline.png" class="coin">
<img src="<?php echo get_template_directory_uri(); ?>/img/bg-leftline.png" class="bank">
</div>
<?php get_footer(); ?>
