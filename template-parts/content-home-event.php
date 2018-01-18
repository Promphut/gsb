<?php
/**
 * Loop Name: Loop Event
 */
?>
<div class="row schedule-row">
<a href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
	<div class="col s3">
		<span class="time">8 พ.ย. 60</span>
	</div>
</a>
<a href="<?php the_permalink(); ?>" title="Permalink to <?php the_title_attribute(); ?>" rel="bookmark">
	<div class="col s9">
		<span class="program"><?php the_title(); ?></span>
		<span class="new badge green" data-badge-caption=""><?php $categories = get_the_category(); if ( ! empty( $categories ) ) { echo esc_html( $categories[0]->name ); } ?></span>
	</div>
	</a>
</div>
