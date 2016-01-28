<?php
/*ajax-отправка письма*/

$name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars(trim($_POST['email']), ENT_QUOTES, 'UTF-8');
$msg = htmlspecialchars(trim($_POST['msg']), ENT_QUOTES, 'UTF-8');
$date = date("d.m.Y H:i");

$msg="Получена заявка с сайта на консультацию по Кальцитопу в $date\r\n"."Имя отправителя: $name\r\n"."Email или телефон: $name\r\n"."Сообщение: $msg";

if(@mail('info@rkorma.ru', 'Сообщение с сайта rkorma.ru от '.$date, $msg)) {
	echo 'Ваше сообщение принято. Наши специалисты свяжутся с Вами в ближайшее время';
} else {
	echo 'Сообщение по каким-то причинам не отправлено';
}

?>