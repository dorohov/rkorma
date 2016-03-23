<?php
/* Template Name: contact - Контакты */

$b_tpl = 'contact';

if ( have_posts() ) {
	
	while ( have_posts() ) {
		the_post();
		$Azbn->post['id'] = get_the_ID();
		$Azbn->lng = lng();
		
		$Azbn->tpl('_/header', array());
		$Azbn->tpl($b_tpl.'/'.$Azbn->lng.'-map', array());
		$Azbn->tpl('_/footer', array());
	}
}
