<?php
/**
* Template Name: Checkup Page
*/
get_header();?>
<div class="section-checkup">
		<!-- <div class="chk-cover firstpage">
			<h1 class="chk-cover-title"> เช็คสุขภาพธุรกิจของคุณ</h1>
			<h2 class="subtitle">แค่กรอกข้อมูลง่ายๆ โปรแกรมจะช่วยประเมิน สุขภาพธุรกิจของคุณได้อย่างมีประสิทธิภาพ</h2>
			<div class="button space">
				<i class="fa fa-share-alt" aria-hidden="true"></i>
				SHARE
			</div>
		</div> -->
		<div class="chk-block firstpage">
			<div class="title"></div>
			<!-- no active class -->
			<div class="chk-select-1">
				<div class="item">
					<i class="fa fa-check none" aria-hidden="true"></i>
					<div class="img chk-personal"></div>
					บุคคลธรรมดา
				</div>
				<div class="item">
					<i class="fa fa-check none" aria-hidden="true"></i>
					<div class="img chk-corporate"></div>
					นิติบุคคล
				</div>
			</div>
			<!-- disabled -->
			<a class="btn-pink disabled" href="">ต่อไป</a>
		</div>
</div>
<script>
jQuery(document).ready(function ($) {
	$(".site-header").addClass("hidden-desk");
	$(".site-canvas").addClass("checkup-bg");

	$(".chk-select-1").children().each(function (index, element) {
		$(element).click(function () {
			$(element).siblings().removeClass("selected");
			$(element).siblings().find(".fa-check").addClass("none");

			$(element).addClass("selected");
			$(element).find(".fa-check").removeClass("none");

			$(".btn-pink").removeClass("disabled");
			if ($(element).text().trim() === "บุคคลธรรมดา") {
				$(".btn-pink").attr("href", "<?php echo site_url('checkup/personal'); ?>")
			} else {
				$(".btn-pink").attr("href", "<?php echo site_url('checkup/corporate'); ?>")
			}
		});
	});
});
</script>
<?php get_footer(); ?>
