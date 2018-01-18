<?php
/**
 * Loop Name: Content Front Knowledge
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
<a href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
  <article id="post-<?php the_ID(); ?>" class="col s12">
    <div class="interest-box hoverable">
    <div class="thumb">
      <img class="center-align" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
    </div>
    <h3 class="header -block-ellipsis-2"><?php the_title(); ?></h3>
    <p class="desc -block-ellipsis-3"><?php echo get_the_excerpt(); ?></p>
  </article>
</a>