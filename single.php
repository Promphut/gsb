<?php
$post = $wp_query->post;
if ( in_category( 'video' ) ) {
  include( TEMPLATEPATH.'/single-video.php' );
} 
elseif ( in_category( 'event' ) ) {
  include( TEMPLATEPATH.'/single-event.php' );
}
else {
  include( TEMPLATEPATH.'/single-generic.php' );
}
?>