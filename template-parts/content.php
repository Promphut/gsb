<?php
/**
 * Loop Name: Content Archive
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
<article id="post-<?php the_ID(); ?>" <?php post_class('seed-col'); ?>>
	<div class="content-item -archive">
		<div class="pic">
			<a href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
				<?php if(has_post_thumbnail()) { the_post_thumbnail('post-normal');} else { echo '<img src="' . esc_url( get_template_directory_uri()) .'/img/thumbnail.jpg" alt="'. get_the_title() .'" />'; }?>
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

			<div class="entry-summary">
				<p class="-block-ellipsis-3"><?php echo get_the_excerpt();?></p>
			</div><!-- .entry-summary -->

			<footer class="entry-footer">
				<?php seed_entry_footer(); ?>
			</footer><!-- .entry-footer -->
		</div><!--info-->
	</div>
</article><!-- #post-## -->