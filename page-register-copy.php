<?php
/**
* Template Name: Register Page (Copy)
*/
get_header();?>
<div class="section-introregister" style="background-image: url('<?php echo get_template_directory_uri(); ?>/img/joinus.jpg');">
	<div class="overlay">
		<div class="container">
			<h1 class="title">Join SMEs Startup Club</h1>
			<ul>
				<li><div class="icon_1"></div>สิทธิในการเข้าร่วมกิจกรรมที่จัดให้เฉพาะสำหรับสมาชิก</li>
				<li><div class="icon_2"></div>สามารถใช้พื้นที่บนเว็บไซต์เพื่อนำเสนอผลิตภัณฑ์ของสมาชิกโดยไม่มีค่าใช้จ่าย</li>
				<li><div class="icon_3"></div>สมาชิกที่ขอสินเชื่อผ่านเว็บไซต์ สามารถจองสิทธิ์โดยไม่ต้องลงทะเบียนในงานมหกรรมทางการเงินต่างๆ</li>
				<li><div class="icon_4"></div>ได้รับข่าวสารการอบรม และสิทธิได้รับคัดเลือกก่อนผู้ประกอบการทั่วไป</li>
			</ul>
		</div>
	</div>
</div>
<div class="section-register">
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
			</main>
			<!-- #main -->
		</div>
		<!-- #primary -->
	</div>
	<!--container-->
	<img src="<?php echo get_template_directory_uri(); ?>/img/coin.png" class="coin">
	<img src="<?php echo get_template_directory_uri(); ?>/img/bank.png" class="bank">
</div>
<script>
	
jQuery(document).ready(function ($) {
	var scroll_start = 0;
	var startchange = $('.section-register');
	var offset = startchange.offset();

	if(detectmob()) {
		$('#masthead').css('background-color', '#EC068D');
		$('.home .menu .current-menu-item a').css('color', '#ffffff');
		$('.home .menu .current-menu-item').css('background', 'rgba(0,0,0,0.1)');
	}

	$(document).scroll(function () {
		$(".parallax").css("background-position", "50% " + ($(this).scrollTop() / 4.5) + "px");
		scroll_start = $(this).scrollTop();
		if (scroll_start > offset.top || detectmob()) {
			$('#masthead').css('background-color', '#EC068D');
			$('.home .menu .current-menu-item a').css('color', '#ffffff');
			$('.home .menu .current-menu-item').css('background', 'rgba(0,0,0,0.1)');
		} else {
			$('#masthead').css('background-color', 'transparent');
			$('.home .menu .current-menu-item').css('background', 'none');
			$('.home .menu .current-menu-item a').css('color', '#EC068D');
		}
	});
});

function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		 return true;
	 }
	else {
		 return false;
	 }
 }

</script>
<?php get_footer(); ?>
