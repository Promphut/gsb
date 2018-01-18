<?php
/**
* Template Name: Result Page
*/
get_header();?>
	<?php 
		$a = $_GET['result'];
		$b = $_GET['de'];
		$c = $_GET['dscr'];
	?>
	<?php
	if ($b <= 1) {
			$bb = 3;
	} elseif ($b <= 2) {
			$bb = 2;
	} elseif ($b <= 3) {
			$bb = 1;
	} else {
			$bb = 0;
	}
	?>
	<?php
	if ($c < 1) {
			$cc = 0;
	} elseif ($c <= 1.5) {
			$cc = 1;
	} elseif ($c <= 2) {
			$cc = 2;
	} elseif ($c <= 2.5) {
			$cc = 3;
	} else {
			$cc = 4;
	}
	?>
	<?php if ( $b != "") {
		$result = $a + $bb + $cc;
		$per = $result/17*100;
	} else {
		$result = $a + $cc;
		$per = $result/15*100;
	}?>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<div class="chk-cover result">
	<h1 class="chk-cover-title space">ผลลัพธ์สุขภาพธุรกิจ</h1>
	<div class="button result">
		<i class="fa fa-share-alt" aria-hidden="true"></i>
		SHARE
	</div>
</div>
<div class="chk-block result">
	<div class="asterisk">
		<div class="label">
			* ผลการเช็คสุขภาพธุรกิจ เป็นเพียงการประเมินเบื้องต้นไม่สามารถนำไปใช้ในการประกอบการพิจารณาสินเชื่อ
		</div>
		<div class="button btn-grey space">
			<i class="fa fa-share-alt" aria-hidden="true"></i>
			SHARE
		</div>
		<div class="button btn-grey">
			พิมพ์
		</div>
	</div>
	<?php while ( have_posts() ) : the_post(); ?>
	
	<?php get_template_part( 'template-parts/content', 'page' ); ?>
	
	<?php endwhile; // End of the loop. ?>
	<div class="result">
		<div class="image">
			<img class="bg" src="<?php echo get_template_directory_uri() ?>/img/result.png" alt="result">
			<img class="arrow" src="<?php echo get_template_directory_uri() ?>/img/arrow.png" alt="result">
		</div>
		<!-- <h1 class="center-align"><?php echo $result; ?></h1> -->
		<!-- <h1 class="center-align"><?php echo $per; ?>%</h1> -->
		<br/>
		<!-- <div class="title">
			โดยรวมถือว่าอยู่ใน "
			<span>เกณฑ์ดี</span> "
		</div> -->
		<div class="happy">
			<div class="happyImg">
				<img src="<?php echo get_template_directory_uri() ?>/img/happy.png" alt="happy">
			</div>
			<div class="happyTextWrapper">
				<div class="happyArrowWrapper">
					<div class="happyArrow"></div>
				</div>
				<div class="happyText">“ธุรกิจของท่านค่อนข้างมีความพร้อม และมีความเป็นไปได้ในการขอสินเชื่อ หากได้รับคำปรึกษาและข้อมูลจากธนาคาร”</div>
			</div>
		</div>
		<!-- <div class="subtitle">
			แต่สามารถปรับปรุงได้หลายจุด ลองดูจากคำแนะนำของเราด้านล่าง
		</div> -->
	</div>

	<div class="recommend">
		<div class="head" style="width:100%;">
			<img src="<?php echo get_template_directory_uri() ?>/img/recommend.png" alt="recommend" style="margin:0px 5px auto 0px">
			คำแนะนำ
		</div>
		<div class="boxs">
			<ul>
				<li>
					<div class="title">
						<i class="material-icons rotate" aria-hidden="true">arrow_forward</i>
						ผลิตภัณฑ์
					</div>
					<div class="chk-rcm-content">
						<div class="wrapper">
							<div class="head">
								<h3><span>&bull;</span> ผลิตภัณฑ์สินเชื่อ</h3>
								<a href="<?php echo site_url('product'); ?>" class="btn-more">ดูเพิ่มเติม</a>
							</div>
							<div class="subhead">ธนาคารขอนำเสนอผลิตภัณฑ์ที่สนับสนุนธุรกิจของท่าน</div>
							<ul>
								<li>
									<img src="<?php echo get_template_directory_uri() ?>/img/rcm1.png" alt="แนะนำผลิตภัณฑ์สินเชื่อ">
									<div class="content">
										<div class="title">ชื่อผลิตภัณฑ์</div>
										<div class="detail">เก็บเงินไว้ใช้จ่ายทั่วไป เพื่อความสะดวกคล่องตัว ในการใช้เงิน มีเงินเก็บอุ่นใจ และพร้อมใช้ในยามที่คุณต้องการได้ทุกเมื่อ
											กับบริการเงินฝากเผื่อเรียกบุคคลธรรมดาไม่หักภาษี
										</div>
										<div class="credit">วงเงินสินเชื่อ : 10.01 - 20.00 ล้านบาท</div>
									</div>
								</li>
								<li>
									<img src="<?php echo get_template_directory_uri() ?>/img/rcm2.png" alt="แนะนำผลิตภัณฑ์สินเชื่อ">
									<div class="content">
										<div class="title">ชื่อผลิตภัณฑ์</div>
										<div class="detail">เก็บเงินไว้ใช้จ่ายทั่วไป เพื่อความสะดวกคล่องตัว ในการใช้เงิน มีเงินเก็บอุ่นใจ และพร้อมใช้ในยามที่คุณต้องการได้ทุกเมื่อ
											กับบริการเงินฝากเผื่อเรียกบุคคลธรรมดาไม่หักภาษี
										</div>
										<div class="credit">วงเงินสินเชื่อ : 10.01 - 20.00 ล้านบาท</div>
									</div>
								</li>
							</ul>
							<div class="head">
								<h3><span>&bull;</span> ผลิตภัณฑ์อื่นๆ</h3>
							</div>
							<div class="more-link">
								<a href="" class="btn-more">เงินฝาก</a>
								<a href="" class="btn-more">ฉลากออมสิน</a>
								<a href="" class="btn-more">บริการออนไลน์</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="title">
					<i class="material-icons" aria-hidden="true">arrow_forward</i>
						Grooming & Training
					</div>
					<div class="chk-rcm-content collapsed">
						<div class="wrapper">
							ติดตามหลักสูตรอบรมของธนาคารเพื่อเพิ่มความแข็งแกร่งให้กับธุรกิจได้ที่
							<div class="more-link">
								<a href="" class="btn-more">ตารางกิจกรรม</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="title">
					<i class="material-icons" aria-hidden="true">arrow_forward</i>
						บทความ
					</div>
					<div class="chk-rcm-content collapsed">
						<div class="wrapper">
							เตรียมธุรกิจของคุณให้พร้อมด้วยบทความและสาระความรู้ดีๆจากธนาคารออมสิน
							<div class="more-link">
								<a href="" class="btn-more">บทความ</a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

<script>
jQuery(document).ready(function($) {    
		$(".site-header").addClass("hidden-desk");
		$(".site-header-space").addClass("no-height");
		$(".site-canvas").addClass("checkup-bg-result");
		
		<?php $perd = $per/20; ?>
		var score = Math.floor(<?php echo $perd ?>);
    console.log(score)
    score = parseInt(score);
    if (score === 1) {
      $(".result").find(".arrow").addClass("level-1")
      $(".result").find(".title").find("span").text("อาการน่าเป็นห่วง").css("color", "#EE6E23");
    } else if (score === 2) {
      $(".result").find(".arrow").addClass("level-2")
      $(".result").find(".title").find("span").text("สุขภาพปกติ").css("color", "#FDBD11");
    } else if (score === 3) {
      $(".result").find(".arrow").addClass("level-3")
      $(".result").find(".title").find("span").text("สุขภาพดี").css("color", "#CDDC36");
    } else if (score === 4) {
      $(".result").find(".arrow").addClass("level-4")
      $(".result").find(".title").find("span").text("สุขภาพดีมาก").css("color", "#8CC44B");
    } else if (score === 5) {
      $(".result").find(".arrow").addClass("level-4")
      $(".result").find(".title").find("span").text("สุขภาพดีมาก").css("color", "#8CC44B");
    } else {
      $(".result").find(".title").find("span").text("อาการโคม่า").css("color", "#E53833");
    }

		$(".boxs").find("li").each(function (index, element) {
			$(element).find('.title').click(function () {
				if ($(element).find(".material-icons").hasClass("rotate")) {
					$(element).find(".material-icons").removeClass("rotate")
				} else {
					$(element).find(".material-icons").addClass("rotate")
				}

				if ($(element).find(".chk-rcm-content").hasClass("collapsed")) {
					$(element).find(".chk-rcm-content").removeClass("collapsed")
				} else {
					$(element).find(".chk-rcm-content").addClass("collapsed")
				}
			})
		});

    function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    };
});
</script>
<?php get_footer(); ?>
