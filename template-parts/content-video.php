<?php
/**
 * Loop Name: Content Video
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
<article id="post-<?php the_ID(); ?>" <?php post_class('col m4'); ?>>
	<div class="content-item video -archive">
		<div class="video-thumb">
			<a href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
				<?php if(has_post_thumbnail()) { the_post_thumbnail('post-video');} else { echo '<img src="' . esc_url( get_template_directory_uri()) .'/img/thumbnail.jpg" alt="'. get_the_title() .'" />'; }?>
				<img class="frame" src="<?php echo get_template_directory_uri() ?>/img/play-frame-demo.png" alt="play-icon">
			</a>
		</div><!--pic-->
		<div class="info">
			<header class="entry-header">
				<?php if ( 'post' === get_post_type() ) : ?>
					<div class="entry-meta">
						<time class="entry-date published" datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date('j F Y'); ?></time>
					</div><!-- .entry-meta -->
				<?php endif; ?>
				<?php the_title( sprintf( '<h2 class="entry-title"><a class="-block-ellipsis-2" href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
			</header><!-- .entry-header -->

			<footer class="entry-footer">
				<?php seed_entry_footer(); ?>
			</footer><!-- .entry-footer -->
		</div><!--info-->
	</div>
</article><!-- #post-## -->