<?php
/**
* Template Name: Corporate Page
*/
get_header();?>
<div class="chk-block">
	<?php while ( have_posts() ) : the_post(); ?>
	
	<?php get_template_part( 'template-parts/content', 'page' ); ?>
	
	<?php endwhile; // End of the loop. ?>
	<!-- disabled -->
</div>
<script>
	jQuery(document).ready(function ($) {
		$(".site-header").addClass("hidden-desk");
		$(".site-canvas").addClass("checkup-bg");

		$(document).on("keyup","input", function() {
			$('input').keyup(function(event) {
				
					// skip for arrow keys
					if(event.which >= 37 && event.which <= 40) return;
				
					// format number
					$(this).val(function(index, value) {
						return value
						.replace(/\D/g, "")
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
						;
					});
				});
		});

		$('.gform_next_button').addClass('disabled');
		$('.gform_next_button').prop('disabled', true);

		setInterval(function(){ 	
			var error = $('.chk-block').find('article').find('.entry-content').find('.gform_wrapper').hasClass('gform_validation_error');
			if(!error) $(".chk-block").find(".gform_previous_button").val("กลับ");

			$(document).on("click",".gform_next_button", function() {
				var _this = this;

				var error = $('.chk-block').find('article').find('.entry-content').find('.gform_wrapper').hasClass('gform_validation_error');
				if (!error){
					$(_this).parents('.chk-block').removeClass("slide-back");
					$(_this).parents('.chk-block').addClass("slide-go");
					// $('.checkup-back').addClass('none');

					if (detectmob()) {
						$('.gform_previous_button').addClass('none');
						$('.gform_next_button').addClass('none');
					}
				}
			});

			$('.gform_previous_button').on('click',()=>{
				setTimeout(() => {
					$('.gform_next_button').removeClass('disabled');
					$('.gform_next_button').prop('disabled', false);
				}, 300);
			})

			$('.gfield_radio').find('li').each(function() {
				$(this).click(function() {
					$(this).parents('.gform_page').find('.gform_page_footer').find('.gform_next_button').removeClass('disabled');
					$(this).parents('.gform_page').find('.gform_page_footer').find('.gform_button').removeClass('disabled');
					$(this).parents('.gform_page').find('.gform_page_footer').find('.gform_next_button').prop('disabled', false);
				})
			});

			$(document).on("keyup", "input", function() {
				let val =  parseInt($('.ginput_container_number').find('input').val()) 
				if (val && typeof val == "number") {
					$(this).parents('.gform_page').find('.gform_page_footer').find('.gform_next_button').removeClass('disabled');
					$(this).parents('.gform_page').find('.gform_page_footer').find('.gform_button').removeClass('disabled');
					$(this).parents('.gform_page').find('.gform_page_footer').find('.gform_next_button').prop('disabled', false);
				}
			});

			var step = $(".gf_progressbar_title").text();
			// console.log(step.indexOf("1 of"))

			if (step.indexOf("1 of") !== -1 && $("#post-365").find(".entry-content").has('.checkup-back').length === 0) {
				$("#post-365").find(".entry-content").prepend('<a class="checkup-back" href="../checkup">กลับ</a>');
			} else if (step.indexOf("1 of") === -1) {
				$('.checkup-back').addClass('none');
			} else if (step.indexOf("1 of") !== -1 && step.indexOf("11 of") === -1) {
				$('.checkup-back').removeClass('none');
			}

			if (step.length > 8) {
					var _this = $('.gform_next_button');
					if($(_this).parents('.chk-block').hasClass("slide-go")) {
						$(_this).parents('.chk-block').removeClass("slide-go");
						$(_this).parents('.chk-block').addClass("slide-back");
						$(".chk-block").find(".gform_previous_button").removeClass("none");
					}

					$(_this).addClass('disabled');
					$(_this).prop('disabled', true);

					$('.gform_button').addClass('disabled');
					if (step.search(4) !== -1 || step.search(5) !== -1) {
						$(_this).removeClass('disabled');
						$(_this).prop('disabled', false);
					}
				
					if(detectmob()) {
						$('.gform_previous_button').css('opacity', '0');
						$('.gform_next_button').css('opacity', '0');
						$('.gform_button ').css('opacity', '0');

						setTimeout(function(){ 
							$(_this).parents('.chk-block').removeClass("slide-back");
							$('.gform_previous_button').css('opacity', '1');
							$('.gform_next_button').css('opacity', '1');
							$('.gform_button ').css('opacity', '1');
						}, 500);
					}

				if(!error) {
					step = step.slice(4).trim();
					$(".gf_progressbar_title").text(step);
				}
			}
		}, 100);
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



