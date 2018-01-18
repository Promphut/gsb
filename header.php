<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package seed
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
</head>

<?php $bodyClass = ''; if (is_active_sidebar( 'headbar' )) { $bodyClass = 'has-headbar'; } ?>

<body <?php body_class($bodyClass); ?>>
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'seed' ); ?></a>
	<div id="page" class="site -layout-<?php echo SEED_LAYOUT; ?> -header-mobile-<?php echo SEED_HEADER_MOBILE; ?> -header-desktop-<?php echo SEED_HEADER_DESKTOP; ?> -menu-<?php echo SEED_MENU; ?> -menu-icon-<?php echo SEED_MENU_ICON; ?> -shop-layout-<?php echo SEED_SHOP_LAYOUT; ?>">

		<nav id="site-mobile-navigation" class="site-mobile-navigation <?php if(SEED_MENU == 'off-canvas') { echo 'sb-slidebar sb-left'; } else { echo '-dropdown'; } ?> _mobile _heading" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'mobile', 'menu_id' => 'mobile-menu' ) ); ?>
			<?php if(is_active_sidebar('top-left')) { ?><div class="mobile-widget"><?php dynamic_sidebar( 'top-left' ); ?></div><?php } ?>
		</nav>

		<header id="masthead" class="site-header sb-slide _heading " role="banner">
			<div class="container">

				<div class="site-branding">
					<div class="site-logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.jpg" alt="logo"></a></div>

						<div class="user-menu _mobile">
								<?php wp_nav_menu( array( 'theme_location' => 'usermenu', 'menu_id' => 'user-menu' ) ); ?>
						</div>

				</div><!--site-branding-->

				<a class="site-toggle <?php if(SEED_MENU == 'off-canvas') { echo 'sb-toggle-left'; } ?> _mobile">
					<i><span></span><span></span><span></span><span></span></i><b></b>
				</a>

				<?php if ($bodyClass == 'has-headbar'): ?>
					<div id="headbar" class="_desktop"><?php dynamic_sidebar( 'headbar' ); ?></div>
				<?php else: ?>
					<div class="site-top-left _desktop"><?php dynamic_sidebar( 'top-left' ); ?></div>
					<nav id="site-desktop-navigation" class="site-desktop-navigation _desktop" role="navigation">
						<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
					</nav>
				<?php endif; ?>

			</div><!--container-->
		</header><!--site-header-->

		<div id="sb-site" class="site-canvas">
			<div class="site-header-space"></div>
			<div id="content" class="site-content">
