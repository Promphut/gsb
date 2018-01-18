<?php
/**
 * Loop Name: Content Front News
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
  <article id="post-<?php the_ID(); ?>" class="col m6 s12">
    <div class="card hoverable">
      <div class="card-image valign-wrapper" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>');">
        <span class="card-title"><?php the_title(); ?></span>
      </div>
    </div>
  </article>
</a>