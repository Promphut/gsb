<?php
/**
 * Loop Name: Content Carousel
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
<article class="carousel-item black white-text" href="#" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);background-size:cover;background-repeat:no-repeat;">
	<div class="overlay-carousel-item"></div>
	<div class="carousel-fixed-item">
		<h2><?php the_title(); ?></h2>
		<a class="btn waves-effect pink white-text darken-text-2" href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">อ่านต่อ</a>
	</div>
</article>
