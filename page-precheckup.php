<?php
/**
* Template Name: Pre Checkup Page
*/
get_header();?>
<div class="section-precheckup">
	<div class="container">
		<div class="row">
			<div class="col m6 s12">
				<p class="center-align">
					<img src="<?php echo get_template_directory_uri(); ?>/img/pre-checkup.png" alt="pre-checkup">
				</p>
			</div>
			<div class="col m6 s12">
				<div class="line"></div>
				<h1 class="chk-cover-title">เช็คสุขภาพธุรกิจของคุณ</h1>
				<h2 class="subtitle">แค่กรอกข้อมูลง่ายๆ โปรแกรมจะช่วยประเมิน <br> สุขภาพธุรกิจของคุณได้อย่างมีประสิทธิภาพ</h2>
				<a class="btn white-text pink" href="<?php echo site_url('checkup'); ?>">เริ่มต้น <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
			</div>
		</div>
	</div>
</div>
<?php get_footer(); ?>
