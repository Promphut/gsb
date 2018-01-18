<?php
/**
 * Loop Name: -
 */
?>

<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title" style="margin-top:30px;margin-bottom:50px;"><?php esc_html_e( 'ยังไม่มีผลิตภัณฑ์จัดแสดง ณ ขณะน้ี', 'seed' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

			<p><?php printf( wp_kses( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'seed' ), array( 'a' => array( 'href' => array() ) ) ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

		<?php else : ?>

			<!-- <p style="font-family: 'rsuregular';"><?php esc_html_e( 'กรุณาค้นหาใหม่อีกครั้ง', 'seed' ); ?></p> -->

		<?php endif; ?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
