<?php get_header(); ?>

<main id="main" class="site-main" role="main">


	<?php
	if (is_active_sidebar( 'banner' )) {
		echo '<div class="site-banner">';
		dynamic_sidebar( 'banner' );
		echo '</div>';
	} else {
		if (get_header_image() != '') {
			echo '<div class="site-banner"><img src="' . get_header_image() . '" alt="banner"></div>';
		}
	}
	?>


	<?php if ( is_home() ) : /* Show Blog List */ ?>
		<div class="home-blog-space"></div>
		<div class="container">
			<div id="primary" class="content-area <?php echo '-'.SEED_BLOG_LAYOUT; ?>">
				<main id="main" class="site-main" role="main">

					<?php
					if ((int)SEED_BLOG_COLUMNS > 1) {
						echo '<div class="seed-grid-'.SEED_BLOG_COLUMNS.'">';
						while ( have_posts() ) : the_post();
						get_template_part( 'template-parts/content','card-excerpt');
						endwhile;
						echo '</div>';
					} else {
						while ( have_posts() ) : the_post();
						get_template_part( 'template-parts/content');
						endwhile;
					}
					?>
					<?php seed_posts_navigation(); ?>

				</main>
			</div><!--primary-->
			<?php
			switch (SEED_BLOG_LAYOUT) {
				case 'rightbar':
				get_sidebar('right');
				break;
				case 'leftbar':
				get_sidebar('left');
				break;
				case 'full-width':
				break;
				default:
				break;
			}
			?>
		</div><!--container-->
	<?php else: /* Show Page Content */ ?>
			<div id="<?php echo get_the_ID(); ?>" class="modal">
				<div class="row">
					<div class="col s12 m12">
						<p class="center-align">
							<a href="#">
								<img class="hide-on-small-only" src="<?php echo get_template_directory_uri() ?>/img/splash.jpg" alt="">
								<img class="show-on-small hide-on-med-and-up" src="<?php echo get_template_directory_uri() ?>/img/splash-m.png" alt="">
							</a>
						</p>
					</div>
				</div>
				<div class="box-btn">
					<a href="#close-modal" rel="modal:close" class="close-modal btn-close">เข้าสู่หน้าแรก</a>
				</div>
			</div>
			<div class="section-videobg">
				<img class="cover-ie" src="<?php echo get_template_directory_uri() ?>/img/cover-ie.png" alt="cover">				
				
				
				<video autoplay muted loop>
					<source src="https://freedomdigitalcommunication.com/bg.mp4" type="video/mp4">
				</video>
				<div class="topbar2"></div>
				<div class="topbar"></div>
				
				<!-- ?php masterslider(7); ? -->
				<!-- <div class="front-overlay"></div> -->
				<div class='text-con'>
					<h2 class="type-it"></h2>
					<div class='line-box'>
						<div class="line"></div>					
					</div>
					<!-- <p class="type-it2"></p> -->
					<h3 class="subtitle">ออมสินช่วยเปลี่ยนความฝัน<br />ให้กลายเป็นความจริง</h3>
					<a href="<?php echo site_url('register'); ?>" class="btn white pink-text">JOIN STARTUP CLUB</a>
				</div>
				<div class="arrow">
					<i class="fa fa-chevron-down" aria-hidden="true"></i>
				</div>

			</div>
		<div class="section-videomobile hide-on-large-only center-align" style="background-image: url('<?php echo get_template_directory_uri(); ?>/img/mobilebg.jpg');">
			<h2 class="title">ไม่มีฝันไหน สมควรเป็นแค่ฝัน</h2>
			<h3 class="subtitle">ออมสินช่วยเปลี่ยนความฝัน<br />ให้กลายเป็นความจริง</h3>
			<a href="<?php echo site_url('register'); ?>" class="btn white pink-text">Join SME Startup Club</a>
		</div>
		<div class="section-com section-com-m show-on-small hide-on-med-and-up">
			<div class="container">
				<div class="row">
					<div class="col s12">
						<div class="main-header">
							<h3 class="title">มาเป็นส่วนหนึ่งกับเราที่ <span class="section-com-1">ประสบความสำเร็จ</span></h3>
							<h3 class="title">เหมือนกับ <span class="section-com-2">&nbsp;Startup&nbsp;</span> เหล่านี้</h3>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col m12 s12">
						<div class="owl-carousel">
							<div>
								<p class="tooltip">
								<span class="circleWrapper">
									<img src="<?php echo get_template_directory_uri() ?>/img/com-1.png" alt="" class="circle">
								</span>
								<span class="tooltiptext">
								<span class="name">คุณเกียรติศักดิ์ กีรติยากรสกุล</span><br/>
								<span class="com">บริษัท KPN Motorcar จำกัด</span>
								</span>
							</p>
							</div>
							<div>
								<p class="tooltip">
								<span class="circleWrapper">
									<img src="<?php echo get_template_directory_uri() ?>/img/com-2.png" alt="" class="circle">
								</span>
								<span class="tooltiptext">
								<span class="name">บ.เอช จี โรโบติกส์</span>
								</span>
							</p>
							</div>
							<div>
								<p class="tooltip">
								<span class="circleWrapper">
									<img src="<?php echo get_template_directory_uri() ?>/img/com-3.png" alt="" class="circle">
								</span>
								<span class="tooltiptext">
								<span class="name">คุณกล้า ตั้งสุวรรณ</span>
								<br/>
								<span class="com">Thoth zocial</span>
								</span>
							</p>
							</div>
							<div>
								<p class="tooltip">
								<span class="circleWrapper">
									<img src="<?php echo get_template_directory_uri() ?>/img/com-4.png" alt="" class="circle">
								</span>
								<span class="tooltiptext">
								<span class="name">คุณจิดาภา จิรพันธุ</span>
								<br/>
								<span class="com">บ.แซนซิโอ้</span>
								</span>
							</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section-com hide-on-small-only">
			<div class="container">
				<div class="row">
					<div class="col s12">
						<div class="main-header-after">
							<h3 class="title">มาเป็นส่วนหนึ่งกับเราที่ <span class="section-com-1">ประสบความสำเร็จ</span></h3>
						</div>
						<div class="main-header-before">
							<h3 class="title-2">เหมือนกับ <span class="section-com-2">&nbsp;Startup&nbsp;</span> เหล่านี้</h3>
						</div>
					</div>
				</div>
				<div class="row center showcase-row">
					<div class="col m3 s12">
						<p class="tooltip">
							<span class="circleWrapper">
								<img src="<?php echo get_template_directory_uri() ?>/img/com-1.png" alt="" class="circle">
							</span>
							<span class="tooltiptext">
								<span class="name">คุณเกียรติศักดิ์ กีรติยากรสกุล</span><br/>
								<span class="com">บริษัท KPN Motorcar จำกัด</span>
								<!-- <br>
								<span class="desc">“ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลกกับวงการ Startup และ ร่วม เป็นส่วนหนึ่งของทีมที่พร้อมเติบโตอย่างก้าวกระโดด และกำลังต้องการคน”</span> -->
							</span>
						</p>
					</div>
					<div class="col m3 s12">
						<p class="tooltip">
							<span class="circleWrapper">
								<img src="<?php echo get_template_directory_uri() ?>/img/com-2.png" alt="" class="circle">
							</span>
							<span class="tooltiptext">
								<span class="name">บ.เอช จี โรโบติกส์</span>
								<!-- <br>
								<span class="desc">“ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลกกับวงการ Startup และ ร่วม เป็นส่วนหนึ่งของทีมที่พร้อมเติบโตอย่างก้าวกระโดด
									และกำลังต้องการคน”</span> -->
							</span>
						</p>
					</div>
					<div class="col m3 s12">
						<p class="tooltip">
							<span class="circleWrapper">
								<img src="<?php echo get_template_directory_uri() ?>/img/com-3.png" alt="" class="circle">
							</span>
							<span class="tooltiptext">
								<span class="name">คุณกล้า ตั้งสุวรรณ</span>
								<br/>
								<span class="com">Thoth zocial</span>
								<!-- <br>
								<span class="desc">“ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลกกับวงการ Startup และ ร่วม เป็นส่วนหนึ่งของทีมที่พร้อมเติบโตอย่างก้าวกระโดด
									และกำลังต้องการคน”</span> -->
							</span>
						</p>
					</div>
					<div class="col m3 s12">
						<p class="tooltip">
							<span class="circleWrapper">
								<img src="<?php echo get_template_directory_uri() ?>/img/com-4.png" alt="" class="circle">
							</span>
							<span class="tooltiptext">
								<span class="name">คุณจิดาภา จิรพันธุ</span>
								<br/>
								<span class="com">บ.แซนซิโอ้</span>
								<!-- <br>
								<span class="desc">“ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลกกับวงการ Startup และ ร่วม เป็นส่วนหนึ่งของทีมที่พร้อมเติบโตอย่างก้าวกระโดด
									และกำลังต้องการคน”</span> -->
							</span>
						</p>
					</div>
				</div>
				<div class="row center">
					<div class="container">
						<!-- <div class="col s12"> -->
							<!-- <a href="#" class="btn"><?php esc_html_e( 'ดูเพิ่มเติม', 'seed' ); ?></a> -->
							<div class="pinkline"></div>
						<!-- </div> -->
					</div>
				</div>
				<!-- <div class="row">
					<div class="col s12 m7">
						<div class="card horizontal hoverable">
							<div class="card-image">
								<img src="<?php echo get_template_directory_uri(); ?>/img/com-1.jpg">
							</div>
							<div class="card-stacked">
								<div class="card-content">
									<h3 class="name">โอชวิน จิรโสตติกุล</h3>
									<h4 class="pos">เจ้าของธุรกิจส่วนตัว</h4>
									<p>ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลก
									กับวงการ Startup และ ร่วมเป็นส่วนหนึ่งของทีม
									ที่พร้อมเติบโตอย่างก้าวกระโดด และกำลังต้องการ
									คนอย่างคุณมาร่วมทีม เพื่อ "สร้าง" สิ่งดีๆ ไปพร้อม
									ๆ กัน ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมา</p>
								</div>
								<div class="card-action">
									<a href="#"><i class="fa fa-arrow-right" aria-hidden="true"></i> infographicthailand.com</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col s12 m5">
						<div class="card hoverable">
							<div class="card-image">
								<img src="<?php echo get_template_directory_uri(); ?>/img/com-2.jpg">
							</div>
							<div class="card-content">
								<h3 class="name">โอชวิน จิรโสตติกุล</h3>
								<h4 class="pos">เจ้าของธุรกิจส่วนตัว</h4>
								<p class="-block-ellipsis-2">ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลก
								กับวงการ Startup และ ร่วมเป็นส่วนหนึ่งของทีม
								ที่พร้อมเติบโตอย่างก้าวกระโดด และกำลังต้องการ
								คนอย่างคุณมาร่วมทีม เพื่อ "สร้าง" สิ่งดีๆ ไปพร้อม
								ๆ กัน ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมา</p>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col s12 m5">
						<div class="card hoverable">
							<div class="card-image">
								<img src="<?php echo get_template_directory_uri(); ?>/img/com-3.jpg">
							</div>
							<div class="card-content">
								<h3 class="name">โอชวิน จิรโสตติกุล</h3>
								<h4 class="pos">เจ้าของธุรกิจส่วนตัว</h4>
								<p class="-block-ellipsis-2">ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลก
								กับวงการ Startup และ ร่วมเป็นส่วนหนึ่งของทีม
								ที่พร้อมเติบโตอย่างก้าวกระโดด และกำลังต้องการ
								คนอย่างคุณมาร่วมทีม เพื่อ "สร้าง" สิ่งดีๆ ไปพร้อม
								ๆ กัน ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมา</p>
							</div>
						</div>
					</div>
					<div class="col s12 m7">
						<div class="card horizontal hoverable">
							<div class="card-image">
								<img src="<?php echo get_template_directory_uri(); ?>/img/com-4.jpg">
							</div>
							<div class="card-stacked">
								<div class="card-content">
									<h3 class="name">โอชวิน จิรโสตติกุล</h3>
									<h4 class="pos">เจ้าของธุรกิจส่วนตัว</h4>
									<p>ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมาเปิดโลก
									กับวงการ Startup และ ร่วมเป็นส่วนหนึ่งของทีม
									ที่พร้อมเติบโตอย่างก้าวกระโดด และกำลังต้องการ
									คนอย่างคุณมาร่วมทีม เพื่อ "สร้าง" สิ่งดีๆ ไปพร้อม
									ๆ กัน ผู้ที่ต้องการเป็นส่วนหนึ่งของสตาร์ทอัพมา</p>
								</div>
								<div class="card-action">
									<a href="#"><i class="fa fa-arrow-right" aria-hidden="true"></i> infographicthailand.com</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row center">
					<div class="container">
						<div class="col s12">
							<a href="#" class="btn"><?php esc_html_e( 'ดูเพิ่มเติม', 'seed' ); ?></a>
							<div class="pinkline"></div>
						</div>
					</div>
				</div> -->
			</div>
		</div>
		<div class="section-showcase">
			<div class="container">
				<div class="row">
					<div class="col m12 s12">
						<h2 class="title"><?php the_field('product_title'); ?></h2>
						<p class="intro">
							<?php the_field('product_desc'); ?>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="section-products">
			<div class="products container">
				<div class="row">
					<div class="flex flex-1">
						<div class="box img-1">
							<div class="overlay">
								<div class="product">กราโนลา</div>
								<!-- <div class="brand"><span>-</span> Like Me</div> -->
							</div>
						</div>
					</div>
					<div class="flex flex-1">
						<div class="box img-2">
						<div class="overlay">
							<div class="product">รองเท้า</div>
							<!-- <div class="brand"><span>-</span> Like Me</div> -->
						</div>
						</div>
					</div>
					<div class="flex flex-3">
						<div class="box img-3">
						</div>
						<div class="overlay">
							<div class="detail">
								<div class="product"><span>&#8226;</span> กระเป๋าหนังแท้</div>
								<div class="desc">กระเป๋าหนังแท้ เป็นกระเป๋าที่มีความทนทานกว่าหนังเทียม หนังจะไม่ลอกหลุดลุ่ย ใช้งานได้นาน สีสันมีความเป็นธรรมชาติ และ มีเอกลักษณ์เฉพาะตัว ดีไซน์มีความเรียบง่าย เน้นให้สะดวกแก่การใช้งานจริง</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="flex flex-1">
						<div class="box img-4">
						<div class="overlay">
							<div class="product">แว่นตา</div>
							<!-- <div class="brand"><span>-</span> Like Me</div> -->
						</div>
						</div>
					</div>
					<div class="flex flex-3 right">
						<div class="overlay">
							<div class="detail">
								<div class="product"><span>&#8226;</span> น้ำผลไม้สกัดเย็น</div>
								<div class="desc">ปัจจุบันคนเริ่มหันมาสนใจเรื่องสุขภาพกันมากขึ้น น้ำผลไม้สกัดเย็น หรือ Cold Pressed Juice เป็นอีกตัวช่วยสำหรับคนอยากลดน้ำหนักและสุขภาพดี เพราะสกัดจากผักผลไม้ 100% ไม่มีการเติมน้ำตาลหรือปรุงแต่ง ได้รับคุณประโยชน์เต็มที่</div>
							</div>
						</div>
						<div class="box img-5">
						</div>
					</div>
					<div class="flex flex-1 right">
						<div class="box img-6">
						<div class="overlay">
							<div class="product">คุกกี้</div>
							<!-- <div class="brand"><span>-</span> Like Me</div> -->
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section-invest">
			<div class="container">
				<div class="row">
					<div class="col l6 s12">
						<h2 class="title"><?php the_field('join_title'); ?></h2>
						<ul class="sub-title">
							ร่วมเป็นส่วนหนึ่งกับเรา GSB SMEs Startup
							<li>ต่อยอดธุรกิจของคุณ</li>
							<li>ร่วมสร้างสรรค์สิ่งใหม่ๆ</li>
							<li>แลกเปลี่ยนประสบการณ์</li>
							<li>รับสิทธิพิเศษจากธนาคารออมสิน</li>
						</ul>
						<div id="join-parallax" class="parallax-container valign-wrappers join-parallax">
							<div style="background-image: url('<?php the_field('join_picture_1'); ?>');" class="responsive-img join_picture_1 parallax" alt="join_picture_1"></div>
						</div>
						<div class="join-parallax-wrapper">
							<div class="join-parallax-2-mobile hide-on-large-only" style="background-image: url('<?php the_field('join_picture_2'); ?>');" alt="join_picture_2"></div>
							<div class="join-parallax-1-mobile hide-on-large-only" style="background-image: url('<?php the_field('join_picture_1'); ?>');" alt="join_picture_1"></div>
						</div>
					</div>
					<div class="col l6 s12 invest-activities">
						<div id="join-parallax-2" class="parallax-container valign-wrapper join-parallax">
							<div style="background-image: url('<?php the_field('join_picture_2'); ?>');" class="responsive-img join_picture_2 parallax" alt="join_picture_2"></div>
						</div>
						<span class="point">•</span>
						<h2 class="title-activity"><?php esc_html_e( 'Incoming Activities', 'seed' ); ?></h2>
						<div class="schedule z-depth-3">
						<?php
						$date_now = date('Y-m-d H:i:s');
						$time_now = strtotime($date_now);
						$time_next_week = strtotime('+31 day', $time_now);
						$date_next_week = date('Y-m-d H:i:s', $time_next_week);
						$posts = get_posts(array(
							'posts_per_page'	=> 3,
							'category_name'			=> 'event',
							'meta_query' 		=> array(
								array(
											'key'			=> 'event_time',
											'compare'		=> 'BETWEEN',
											'value'			=> array( $date_now, $date_next_week ),
											'type'			=> 'DATETIME'
									)
								),
							'order'				=> 'ASC',
							'orderby'			=> 'meta_value',
							'meta_key'			=> 'event_time',
							'meta_type'			=> 'DATETIME'
						));
						if( $posts ): ?>
							<?php $i = 0; ?>
							<?php foreach( $posts as $p ): ?>
								<?php $date = get_field('event_time'); ?>
								<?php $type = get_field('event_type', $p->ID); ?>
								<div class="row schedule-row">
								<a href="<?php echo $p->guid ?>" rel="bookmark">
									<div class="col m3 s4">
										<span class="time none"><?php the_field('event_time', $p->ID); ?></span>
									</div>
									<div class="col m9 s8">
										<span class="program"><?php echo $p->post_title ?></span><?php if( get_field('event_type', $p->ID) == 'Grooming' ): ?><div class="chip grooming">Grooming</div><?php endif; ?></span><?php if( get_field('event_type', $p->ID) == 'Training' ): ?><div class="chip training">Training</div><?php endif; ?>
										<!-- <span class="new badge green" data-badge-caption=""><?php $categories = get_the_category(); if ( ! empty( $categories ) ) { echo esc_html( $categories[0]->name ); } ?></span> -->
									</div>
									</a>
								</div>
							<?php endforeach; ?>
							<?php endif; ?>
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
		</div>
		<div class="section-update">
			<div class="section-update-m show-on-small hide-on-med-and-up">
				<div class="container">
					<div class="row">
						<div class="col m12 s12">
							<div class="main-header">
								<h3 class="title"><?php esc_html_e( 'ข่าว', 'seed' ); ?></h3>
							</div>
						</div>
					</div>
				</div>
				<div class="owl-carousel">
					<?php
					$args = array( 'posts_per_page' => 4,'category_name' => 'news');
					$query = new WP_Query( $args );
					while ( $query->have_posts() ) : $query->the_post(); ?>
						<?php get_template_part( 'template-parts/content', 'front-news');
					endwhile;
					wp_reset_postdata();
					?>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col m8 s12 hide-on-small-only">
						<div class="main-header">
							<h3 class="title"><?php esc_html_e( 'ข่าว', 'seed' ); ?></h3>
						</div>
						<div class="row">
							<?php
							$args = array( 'posts_per_page' => 4,'category_name' => 'news');
							$query = new WP_Query( $args );
							while ( $query->have_posts() ) : $query->the_post(); ?>
								<?php get_template_part( 'template-parts/content', 'front-news');
							endwhile;
							wp_reset_postdata();
							?>
							<!-- <div class="col m6 s12">
								<div class="card hoverable">
									<div class="card-image valign-wrapper" style="background-image: url('<?php echo get_template_directory_uri(); ?>/img/update-1.jpg');">
										<span class="card-title">หารายได้เสริมจากงานที่เหมาะกับ ไลฟ์สไตล์ของเรา</span>
									</div>
								</div>
							</div>
							<div class="col m6 s12">
								<div class="card hoverable">
									<div class="card-image valign-wrapper" style="background-image: url('<?php echo get_template_directory_uri(); ?>/img/update-2.jpg');">
										<span class="card-title">บันได 6 ขั้น ปั้นธุรกิจ STARTUP เงินล้านก่อน 30</span>
									</div>
								</div>
							</div>
							<div class="col m6 s12">
								<div class="card hoverable">
									<div class="card-image valign-wrapper" style="background-image: url('<?php echo get_template_directory_uri(); ?>/img/update-3.jpg');">
										<span class="card-title">5 ลักษณะ ของผู้ประสบความสำเร็จ</span>
									</div>
								</div>
							</div>
							<div class="col m6 s12">
								<div class="card hoverable">
									<div class="card-image valign-wrapper" style="background-image: url('<?php echo get_template_directory_uri(); ?>/img/update-4.jpg');">
										<span class="card-title">แนวคิดธุรกิจยุคใหม่ ไม่ต้องพึ่งประสบการณ์</span>
									</div>
								</div>
							</div> -->
						</div>
					</div>
					<div class="col m4 s12">
						<div class="main-header">
							<h3 class="title"><?php esc_html_e( 'บทความที่น่าสนใจ', 'seed' ); ?></h3>
						</div>
						<div class="row">
								<?php
								$args = array( 'posts_per_page' => 1,'category_name' => 'knowledge');
								$query = new WP_Query( $args );
								while ( $query->have_posts() ) : $query->the_post(); ?>
									<?php get_template_part( 'template-parts/content', 'front-knowledge');
								endwhile;
								wp_reset_postdata();
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="parallax-container valign-wrapper word-parallax">
			<div class="container">
				<div class="row center">
					<h2 class="header col s12 white-text"><?php the_field('test_title'); ?></h2>
					<h3 class="sub-header col s12 white-text"><?php the_field('test_subtitle'); ?></h3>
				</div>
			</div>
			<div class="parallax" style="background-image: url('<?php the_field('test_bg'); ?>');"></div>
		</div>
		<!-- <div class="section-join">
			<div class="join-intro">
				<div class="container">
					<div class="row">
						<div class="col s12">
							<h3 class="title center">ร่วมโปรแกรมพิเศษ เฉพาะสมาชิก <span class="pink-text">SME Startup Club</span></h3>
						</div>
					</div>
				</div>
			</div>
			<div class="row join-select">
				<div class="col m6 s6">
					<img src="<?php echo get_template_directory_uri(); ?>/img/join-l.jpg" alt="">
					<div class="float left">
						<h3 class="title"><span class="pink-text">Grooming</span> Program</h3>
						<p class="sub-title">ร่วมกิจกรรมสตาร์ทอัพมากมาย เปิดสมอง สร้างคอนเนคชั่น</p>
					</div>
				</div>
				<div class="col m6 s6">
					<img src="<?php echo get_template_directory_uri(); ?>/img/join-r.jpg" alt="">
					<div class="float right">
					<h3 class="title"><span class="pink-text">Coaching</span> Program</h3>
					<p class="sub-title">รับคำปรึกษาจาก Mentor ชั้นนำ เพื่อปรับธุรกิจให้ก้าวกระโดด</p>
					</div>
				</div>
			</div>
			</div>
		</div> -->
		<!-- <div class="section-quote">
			<div class="container">
				<div class="row">
					<div class="col s12">
						<h3 class="quote right-align">"หลายคนจำกัดอยู่แค่ในสิ่งที่คิดว่าตนทำได้ <br />จริงๆคุณสามารถไปไกลเท่ากับที่ใจจะคิด และความเชื่อว่าจะสำเร็จ"</h3>
						<p class="author right-align">- Mary Kay Ash</p>
					</div>
				</div>
			</div>
		</div> -->
		<section class="joinus">
			<div class="block img">
			</div>
			<div class="block content">
				<h2>แล้วคุณล่ะ พร้อมจะเปลี่ยนความฝัน ให้ไม่เป็นแค่ฝันหรือยัง</h2>
				<ul>
					<li><div class="icon_1"></div>ร่วมกิจกรรมพิเศษเฉพาะสำหรับสมาชิก</li>
					<li><div class="icon_2"></div>นำเสนอผลิตภัณฑ์ของคุณฟรี! ไม่มีค่าใช้จ่าย</li>
					<li><div class="icon_3"></div>จองสิทธิ์อัตราดอกเบี้ยและโปรโมชั่นพิเศษ เมื่อขอสินเชื่อผ่านเว็ปไซต์</li>
					<li><div class="icon_4"></div>รับข่าวสารการอบรม และสิทธ์ิได้รับคัดเลือกก่อนผู้ประกอบการทั่วไป</li>
				</ul>
				<div class="btnWrapper">
					<a href="<?php echo site_url('register'); ?>">Join SMEs Startup Club</a>
				</div>
			</div>
		</section>
		<!-- <div class="section-homejoin">
			<div class="container">
				<div class="row">
						<div class="col m12 s12">
							<h3 class="title">แล้วคุณล่ะ พร้อมจะเปลี่ยนความฝันให้ไม่ใช่แค่ฝันหรือยัง ?</h3>
						</div>
				</div>
				<div class="row pri-row hide-on-small-only">
					<div class="col m3">
						<p>
							<img src="<?php echo get_template_directory_uri(); ?>/img/mock.jpg" class="responsive-img" alt="mock">
						</p>
						<h4 class="pri">สิทธิพิเศษ</h4>
					</div>
					<div class="col m3">
						<p>
							<img src="<?php echo get_template_directory_uri(); ?>/img/mock.jpg" class="responsive-img" alt="mock">
						</p>
						<h4 class="pri">สิทธิพิเศษ</h4>
					</div>
					<div class="col m3">
						<p>
							<img src="<?php echo get_template_directory_uri(); ?>/img/mock.jpg" class="responsive-img" alt="mock">
						</p>
						<h4 class="pri">สิทธิพิเศษ</h4>
					</div>
					<div class="col m3">
						<p>
							<img src="<?php echo get_template_directory_uri(); ?>/img/mock.jpg" class="responsive-img" alt="mock">
						</p>
						<h4 class="pri">สิทธิพิเศษ</h4>
					</div>
				</div>
				<div class="row">
					<div class="col m12 s12">
						<a href="<?php echo site_url('register'); ?>" class="btn waves-effect">Join SME Startup Club</a>
					</div>
				</div>
			</div>
		</div> -->
		<div class="section-banner">
			<div class="container">
				<div class="row">
					<div class="col m12 s12">
						<div class="owl-carousel">
							<?php
							if( have_rows('banner_repeater') ):
							while ( have_rows('banner_repeater') ) : the_row();
							?>
							<div><img src="<?php the_sub_field('banner_picture') ?>" alt="Banner"></div>
							<?php
							endwhile;
							else :
							endif;
							?>
						</div>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<?php
/*
<div class="home-section -news">
	<div class="container">
		<h2>Recent News</h2>
		<?php
			$args = array(
				// 'post_type' => 'post',
				// 'category_name' => 'news',
				'posts_per_page' => 4
				);
			$the_query = new WP_Query( $args );
		?>

		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

		<?php get_template_part( 'template-parts/content', '' ); ?>

		<?php endwhile; wp_reset_postdata(); ?>
	</div><!--container-->
</div><!--home-section-->
*/
?>
<script>
	jQuery(document).ready(function($) {
		$(".modal").modal();
		<?php if(!isset($_COOKIE["Modal"])) { ?>
			<?php setcookie("Modal", True, time() + (86400 * 30), "/"); ?>
	<?php } else { } ?>
	var scroll_start = 0;
	var startchange = $('.section-com');
	var offset = startchange.offset();
	$(document).scroll(function() {
		$("#join-parallax").find(".parallax").css("background-position","0% " + (($(this).scrollTop() / 12) + 160) + "px");
		$("#join-parallax-2").find(".parallax").css("background-position","50% " + (($(this).scrollTop() / 12) + 220) + "px");
		$(".word-parallax").find(".parallax").css("background-position","50% " + (($(this).scrollTop() / 5.55) - 50) + "px");
		 scroll_start = $(this).scrollTop();
		 // if(scroll_start > offset.top) {
			// 	 $('#masthead').css('background-color', '#EC068D');
			// 	 $('.home .menu .current-menu-item a').css('color', '#ffffff');
			// 	 $('.home .menu .current-menu-item').css('background', 'rgba(0,0,0,0.1)');
     //
			// 	 $(".home nav ul a").mouseover(function() {
			// 		$(this).css("color", "#B0B0B0")
			// 	});
			// 	 $(".home nav ul a").mouseleave(function() {
			// 		$(this).css("color", "#FFFFFF")
			// 	});
			// } else {
			// 	 $('#masthead').css('background-color', 'transparent');
			// 	 $('.home .menu .current-menu-item').css('background', 'none');
			// 	 $('.home .menu .current-menu-item a').css('color', '#EC068D');
			// }
	});

	$(".section-videobg").find(".arrow").click(function(){
		$("html, body").animate({ scrollTop: $(window).height()}, 800);
	});

  new TypeIt('.type-it', {
		strings: ['ไม่มีฝันไหน', 'สมควรเป็นแค่ฝัน'],
		speed: 50,
		startDelay: 900,
		nextStringDelay: 0,
		// cursor: false
	});

  // new TypeIt('.type-it2', {
	// 	strings: ['ที่ออมสินเราช่วยเปลี่ยนความคิด', 'ให้กลายเป็นความจริง'],
	// 	speed: 50,
	// 	startDelay: 5500,
	// 	cursor: false
	// });

	$(window).on("load",function() {

		$(window).scroll(function() {
			var windowBottom = $(this).scrollTop() + $(this).innerHeight();

			var comBottom = $('.section-com.hide-on-small-only').offset().top + $('.section-com.hide-on-small-only').outerHeight();
			var productBottom = $('.section-products').offset().top + $('.section-products').outerHeight();
			var updateBottom = $('.section-update').offset().top + $('.section-update').outerHeight();

			if (comBottom - 200 < windowBottom) {
				$('.section-com').find('.container').find('.showcase-row').find('.col').addClass('slide');
			}

			if (detectmob()){
				if (productBottom - 500 < windowBottom) {
					$('.products').find('.row').addClass('show');
					$('.products').find('.row').find('.flex').find('.overlay').addClass('show');

					setTimeout(function(){
						$('.products').find('.row').find('.flex').find('.overlay').find('.detail').addClass('show');
					}, 800);
				}
			} else {
				if (productBottom - 200 < windowBottom) {
					$('.products').find('.row').addClass('show');
					$('.products').find('.row').find('.flex').find('.overlay').addClass('show');

					setTimeout(function(){
						$('.products').find('.row').find('.flex').find('.overlay').find('.detail').addClass('show');
					}, 800);
				}
			}

			if (updateBottom - 200 < windowBottom) {
				$('.section-update').find('.container').find('.row').find('.m8').addClass('slide');
				$('.section-update').find('.container').find('.row').find('.m4').addClass('slide');
			}
		}).scroll();
	});


	$('.schedule ').find('.schedule-row').each(function(){
		var date = $(this).find('.time').text();

		date = date.split(" ")[0];
		date = moment(date, "YYYY-MM-DD").format('D MMM YYYY');

		$(this).find('.time').text(date);
		$(this).find('.time').removeClass('none');
	})
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
