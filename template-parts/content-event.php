<?php
/**
 * Loop Name: Content Event
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
<?php $date = get_field('event_time'); ?>
<div class="col s12">
	<table class="act-table">
		<tr id="post-<?php the_ID(); ?>" <?php post_class('seed-col'); ?>>
			<td><time class="entry-date published" datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date('j M y'); ?></time></td>
			<td>
				<a href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
					<div class="act-text">
						<?php the_title(); ?>
					</div>
					<div class="act-tag green"><?php $categories = get_the_category(); if ( ! empty( $categories ) ) { echo esc_html( $categories[0]->name ); } ?></div>
					<div class="chk-arrow">
						<i class="fa fa-arrow-right" aria-hidden="true"></i>
					</div>
				</a>
			</td>
		</tr>
	</table>
</div>