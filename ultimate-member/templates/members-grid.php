<div class="row">
	
	<?php $i = 0; foreach( um_members('users_per_page') as $member) { $i++; um_fetch_user( $member ); ?>
	<div class="col m3 s12">
		<a href="<?php echo um_user_profile_url(); ?>" title="<?php echo esc_attr(um_user('display_name')); ?>">
			<div class="member z-depth-1 hoverable">
				<?php if ($profile_photo) {
				$default_size = str_replace( 'px', '', um_get_option('profile_photosize') );
				$corner = um_get_option('profile_photocorner');
				?>
				<div class="member-photo"><?php echo get_avatar( um_user('ID'), '$default_size' ); ?></div>
				<?php } ?>
				<div class="member-info ">
					<h3 class="member-name"><?php echo um_user('first_name', 'html'); ?> <?php echo um_user('last_name', 'html'); ?></h3>
					<h4 class="member-com"><?php echo um_user('comname', 'html'); ?></h4>
					<p class="member-desc -block-ellipsis-3"><?php echo um_user('comdesc', 'html'); ?></p>
				</div>
			</div>
		</a>
	</div>		
				
	<?php 
	um_reset_user_clean();
	} // end foreach

	um_reset_user();
	?>

	<div class="um-clear"></div>
</div>
