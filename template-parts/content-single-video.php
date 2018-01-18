<?php
/**
 * Loop Name: Content Single Video
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title text-center">', '</h1>' ); ?>

		<?php if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
				<time class="entry-date published" datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date('j M Y'); ?></time>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		
		<iframe width="736" height="414" src="https://www.youtube.com/embed/<?php the_field('video_link'); ?>" frameborder="0" allowfullscreen></iframe>
		<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'seed' ),
			'after'  => '</div>',
			) );
			?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php seed_entry_footer(); ?>
			<?php the_tags( '<ul class="tags"><li>', '</li><li>', '</li></ul>' ); ?>
			<?php seed_social(); ?>
		</footer><!-- .entry-footer -->
</article><!-- #post-## -->