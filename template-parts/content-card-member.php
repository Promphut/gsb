<?php
/**
 * Loop Name: Content Card Member
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
<div class="col l3 m4 s12">
	<a href="#<?php echo get_the_ID(); ?>" rel="modal:open">
		<div class="member z-depth-1 hoverable">
			<div class="member-photo">
			<?php if(has_post_thumbnail()) { the_post_thumbnail();} else { echo '<img src="' . esc_url( get_template_directory_uri()) .'/img/thumb.jpg" alt="'. get_the_title() .'" />'; }?>
			</div>
			<div class="member-info ">
				<h3 class="member-name"><?php the_title(); ?></h3>
				<h4 class="member-com"><?php the_field( 'company_name' ); ?></h4>
				<p class="member-desc -block-ellipsis-3"><?php the_field( 'company_desc' ); ?></p>
			</div>
		</div>
	</a>  
	<div id="<?php echo get_the_ID(); ?>" class="modal">
	  <div class="row">
	  	<div class="col m6 s12" style="padding: 0;">
	  		<div class="row">
	  			<div class="col m12 s12">
	  				<?php the_post_thumbnail('full'); ?>
	  			</div>
	  			<div class="col m6 s12">
	  				<?php the_post_thumbnail('full'); ?>
	  			</div>
	  			<div class="col m6 s12">
	  				<?php the_post_thumbnail('full'); ?>
	  			</div>
	  		</div>
	  	</div>
	  	<div class="col m6 s12" style="padding: 0;">
	  		<div class="row">
	  			<div class="col m12 s12">
	  				<h2 class="member-name"><?php the_title(); ?></h2>
			  		<h3 class="member-company"><?php the_field( 'company_name' ); ?></h3>
			  		<a class="member-web" target="_blank" href="<?php the_field( 'company_web' ); ?>"><i class="fa fa-arrow-right" aria-hidden="true"></i> <?php the_field( 'company_web' ); ?></a>
			  		<div class="content"><?php echo get_field( 'company_info' ); ?></div>
			  		<hr>
	  			</div>
	  			<div class="col m6 s12">
	  				<p class="additional"><span class="heading">เบอร์ติดต่อ:</span> <?php the_field( 'company_phone' ); ?></p>
	  			</div>
	  			<div class="col m6 s12">
	  				<p class="additional"><span class="heading">ที่อยู่:</span> <?php the_field( 'company_address' ); ?></p>
	  			</div>
	  		</div>
	  	</div>
	  </div>
	</div>
</div>
