<?php
/**
 * Loop Name: Content Card with Excerpt
 */
?>
<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package seed
 */

?>
	<?php
	$author_id = get_the_author_meta('ID');
	$company_name = get_field('company_name', 'user_'. $author_id );
	$company_desc = get_field('company_desc', 'user_'. $author_id );
	$company_logo = get_field('company_logo', 'user_'. $author_id );
	$company_address = get_field('company_address', 'user_'. $author_id );
	$company_phone = get_field('company_phone', 'user_'. $author_id );
	$company_website = get_field('company_website', 'user_'. $author_id );
	$company_fb = get_field('company_fb', 'user_'. $author_id );
	?>
		<a href="#<?php echo get_the_ID(); ?>" rel="modal:open">
<article id="post-<?php the_ID(); ?>" class="item ">

		<?php if(has_post_thumbnail()) { the_post_thumbnail('full');} else { echo '<img src="' . esc_url( get_template_directory_uri()) .'/img/thumb.jpg" alt="'. get_the_title() .'" />'; }?>

	<h3 class="title"><?php the_title(); ?></h3>
	<h4 class="company-name"><?php echo $company_name; ?></h4>
	<div id="<?php echo get_the_ID(); ?>" class="modal">
		<div class="brand-top">
			<div class="row">
				<div class="col m1 s12" style="padding-right:0;">
					<img class="logo" src="<?php echo $company_logo; ?>" alt="Logo">
				</div>
				<div class="col m10 s12">
					<h3 class="brand-title"><?php echo $company_name; ?></h3>
					<p class="brand-desc"><?php echo $company_desc; ?></p>
				</div>
			</div>
		</div>
	  <div class="row">
	  	<div class="col m6 s12" style="padding: 0;">
	  		<div class="row">
	  			<div class="col m12 s12">
	  				<?php the_post_thumbnail('full'); ?>
	  			</div>
	  		</div>
	  	</div>
	  	<div class="col m6 s12" style="padding: 0;">
	  		<div class="row">
	  			<div class="col m12 s12">
	  				<h2 class="member-name"><?php the_title(); ?></h2>
						<div class="info">
							<?php the_content(); ?>
							<hr>
							<h3 class="contact"><span>•</span>สนใจติดต่อ</h3>
							<p><span class="pink-text">ที่อยู่ : </span><?php echo $company_address; ?></p>
							<p><span class="pink-text">เบอร์ติดต่อ : </span><?php echo $company_phone; ?></p>
							<?php if( get_field('company_website', 'user_'. $author_id ) ): ?>
								<a href="<?php echo $company_website; ?>" target="_blank">
								<img class="icon" src="<?php echo get_template_directory_uri() ?>/img/web-icon.png" alt="web icon">
								</a>
							<?php endif; ?>
							<?php if( get_field('company_fb', 'user_'. $author_id ) ): ?>
								<a href="<?php echo $company_fb; ?>" target="_blank">
								<img class="icon" src="<?php echo get_template_directory_uri() ?>/img/fb-icon.png" alt="fb icon">
								</a>
							<?php endif; ?>
							<hr>
							<h3 class="contact"><span>•</span>ผลิตภัณฑ์อื่นๆ</h3>
						</div>
	  			</div>
	  		</div>
	  	</div>
	  </div>
</article>
	</a>
