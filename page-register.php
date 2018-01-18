<?php
/**
* Template Name: Register Page
*/
get_header();?>
<div class="section-register">
	<video loop muted autoplay class="fullscreen-bg__video">
		<source src="<?php echo get_template_directory_uri(); ?>/img/register-bg.webm" type="video/webm">
	</video>
	<div class="container">
		<div class="row">
			<div class="col l7 m5 s12" >
				<div class="block content">
					<div class="line hide-on-small-only"></div>
					<h2 class="title">Join SMEs Startup Club</h2>
					<ul>
						<li>
							<div class="icon_1"></div>ร่วมกิจกรรมพิเศษเฉพาะสำหรับสมาชิก</li>
						<li>
							<div class="icon_2"></div>นำเสนอผลิตภัณฑ์ของคุณฟรี! ไม่มีค่าใช้จ่าย</li>
						<li>
							<div class="icon_3"></div>จองสิทธิ์อัตราดอกเบี้ยและโปรโมชั่นพิเศษ เมื่อขอสินเชื่อผ่านเว็ปไซต์</li>
						<li>
							<div class="icon_4"></div>รับข่าวสารการอบรม และสิทธ์ิได้รับคัดเลือกก่อนผู้ประกอบการทั่วไป</li>
					</ul>
					</div>
				</div>
			<div class="col l5 m7 s12">
				<div class="row row-note">
					<div class="col m12">
						<h4 class="right-align note" style="position:relative;">* ธนาคารจะไม่อนุญาตให้มีการเปิดเผยข้อมูลส่วนตัวของท่านแก่บุคคลภายนอก</h4>
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
			</div>
		</div>
	</div>
</div>
<script>
jQuery(document).ready(function($) {
	$("._um_row_2").hide();
	$(".um-col-alt").hide();
	$("#next").click(function(){
		$("._um_row_2").show();
		$(".um-col-alt").show();
		$("._um_row_1").hide();
	});
	$("#back").click(function(){
		$("._um_row_2").hide();
		$(".um-col-alt").hide();
		$("._um_row_1").show();
	});

	$('.um-field.um-field-user_password.um-field-password.um-field-type_password').each(function (index, element) {
		if ($(element).attr('data-key') === 'user_password') {
			$(element).append("<p class='password-hint'>เพื่อความปลอดภัย รหัสผ่านต้องไม่ตํ่ากว่า 8 ตัวอักษร ประกอบด้วยตัวอักษรพิมพ์เล็ก พิมพ์ใหญ่ ตัวเลข และตัวอักขระพิเศษ</p>");
		}
	})

	$('.um-field-block').find('#next').addClass('disabled');
	$('.card-register').find('#um-submit-btn').addClass('disabled');

	$(document).on("keyup","input", function() {
		var user = $('#user_login-118').val();
		var password = $('#user_password-118').val();
		var confirm = $('#confirm_user_password-118').val();

		if (checkText(user)
			&& checkPassword(password)
			&& checkPassword(confirm))
		{
			$('.card-register').find('#um-submit-btn').removeClass('disabled');
		} else {
			if (!$('.um-field-block').find('#next').hasClass('disabled')) {
			}
		}

		var firstName = $('#first_name-118').val();
		var lastName = $('#last_name-118').val();
		var email = $('#user_email-118').val();
		var line = $('#line-118').val();

		if (checkText(firstName)
			&& checkText(lastName)
			&& checkText(email)
			&& checkText(line))
		{
			$('.card-register').find('#next').removeClass('disabled');
		}
		else {
			if (!$('.card-register').find('#um-submit-btn').hasClass('disabled')) {
			}
		}
	});
});

function checkText(text) {
	if (text.trim() !== '') {
		return true
	} else {
		return false
	}
}

function checkPassword(password) {
	if (password.length >= 8) {
		return true
	} else {
		return false
	}
}
</script>
<?php get_footer(); ?>
