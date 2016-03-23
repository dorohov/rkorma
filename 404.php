<?php
/*  */

$b_tpl = '404';

if ( have_posts() ) {
	
	while ( have_posts() ) {
		the_post();
		$Azbn->post['id'] = get_the_ID();
		
	}
}

$Azbn->lng = lng();

$Azbn->tpl('_/header', array());
//get_search_form();
$Azbn->tpl($b_tpl.'/'.$Azbn->lng.'-index', array());
$Azbn->tpl('_/footer', array());