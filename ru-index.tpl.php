<?
$this->tpl('_/page-loader', array());
?>

<div id="fullpage" >

<header class="index__header section">
	
	<div class="_ih__flex">
		<div class="_ih__heading">Важный элемент<br />вашего бизнеса</div>
		<div class="_ih__note">Наша миссия — содействовать российскому<br />сельхозпроизводителю в повышении качества продукции,<br />создавая оптимальные условия для развития новых<br />гармонизированных стандартов производства.</div>
		<a href="#" class="_ih__scroll-next"></a>
	</div>
	
	<div class="_ih__flex">
		<div class="_ih__heading">Вместе с нами<br />к новым высотам</div>
		<div class="_ih__note">Не участие, а победа! Мы нацелены на сотрудничество с целью<br />совместных достижений высоких результатов</div>
		<a href="#" class="_ih__scroll-next"></a>
	</div>
	
	<div class="_ih__flex">
		<div class="_ih__heading">Продукты «Live Cow»</div>
		<div class="_ih__note">
			Для достижения главной цели - рентабельности Вашей
			<br />
			молочной фермы нами создана серия продуктов под брендом
			<br />
			«LIVE COW», обеспечивающих правильный набор кормовых
			<br />
			добавок с гарантированной точностью дозировки,
			<br />
			для различных жизненных циклов молочного стада
		</div>
		<a href="#" class="_ih__scroll-next"></a>
	</div>
	
	<div class="_ih__flex">
		<div class="_ih__heading">Эффективная модель<br />птицефермы</div>
		<div class="_ih__note">
			Использование наших современных научных знаний в области
			<br />
			здоровья и кормления сельскохозяйственных птиц позволит
			<br />
			построить экономически эффективную модель птицефермы
		</div>
		<a href="#" class="_ih__scroll-next"></a>
	</div>
	
	<a class="header-arrow left" href="#left" ></a>
	<a class="header-arrow right" href="#left" ></a>
	
</header> 


<div class="index__about  section">
	<div class="container _i-about__container ">
		<div class="row">
			<div class="col-xs-12">
				<div class="_i-about__heading">Новые решения<br />в технологии кормления</div>
				<div class="_i-about__note">
					Мы предлагаем эффективные решения для серьезных проблем бизнеса. Постоянные исследования и разработки, внедрение инновационных технологий нашими партнерами, добросовестность и образованность высококвалифицированных специалистов позволяют нам осуществлять наш девиз —  «Снизить себестоимость, повышая качество».
				</div>
				<div class="_i-about__flex">
					<div class="_i-about__item smooth-item">
						<div class="_i-about__icon icon1"></div>
						<div>Наши индивидуальные решения проблем попадают <b>точно в цель</b>.             В ходе принятия эффективного решения мы уделяем большое внимание особенностям производственного процесса        нашего партнёра.</div>
					</div>
					
					<div class="_i-about__item smooth-item">
						<div class="_i-about__icon icon3"></div>
						<div>
						Благодаря разветвленной сети и оперативной работе мы сотрудничаем с партнёрами из 19 регионов России.
						<br />
						Профессионализм команды и высокий авторитет компании в целом, позволяет вести работу по расширению региональной сети
						</div>
					</div>
					
					<div class="_i-about__item smooth-item">
						<div class="_i-about__icon icon2"></div>
						<div>Идеально <b>качественное сырье</b> позволяет воплотить лучшие решения. <b>Собственное производство</b> дает нам свободу реализации потенциала накопленных знаний для успеха наших партнёров, а также позволяет максимально быстро реагировать на изменения рынка.</div>
					</div>
					
					<div class="_i-about__item smooth-item">
						<div class="_i-about__icon icon4"></div>
						<div>
							Качество - результат <b>тщательного поиска поставщиков</b>. Предлагаем готовые продукты и ингредиенты высшего качества. Мы ценим наших партнёров, которые поставляют нам эксклюзивные продукты и оказывают разностороннюю поддержку.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="partner-block hidden-xs">
		<div class="partner__item smooth-item">
			<img src="<?=$this->path('img');?>/index/partner-item1.png" alt="">
		</div>
		<div class="partner__item smooth-item">
			<img src="<?=$this->path('img');?>/index/partner-item2.png" alt="">
		</div>
		<div class="partner__item smooth-item">
			<img src="<?=$this->path('img');?>/index/partner-item4.png" alt="">
		</div>
		<div class="partner__item smooth-item">
			<img src="<?=$this->path('img');?>/index/partner-item3.png" alt="">
		</div>
		<div class="partner__item smooth-item">
			<img src="<?=$this->path('img');?>/index/partner-item5.png" alt="">
		</div>
		<div class="partner__item smooth-item">
			<img src="<?=$this->path('img');?>/index/partner-item6.png" alt="">
		</div>
		<div class="partner__item smooth-item">
			<img src="<?=$this->path('img');?>/index/partner-item7.png" alt="">
		</div>
	</div>
</div> 


<div class="index__products section">
	<div class="_i-products__flex">
		<a href="<?=l(695);?>" class="_i-products__item smooth-item">
			<div class="item-bg item1">
				<div class="item-bg__icon icon1"></div>
				<div class="item-bg__header">для птицы</div>
			</div>
		</a> 
		<a href="<?=l(697);?>" class="_i-products__item smooth-item">
			<div class="item-bg item2">
				<div class="item-bg__icon icon2"></div>
				<div class="item-bg__header">для свиней</div>
			</div>
		</a> 
		<a href="<?=l(699);?>" class="_i-products__item smooth-item">
			<div class="item-bg item3">
				<div class="item-bg__icon icon3"></div>
				<div class="item-bg__header">для коров</div>
			</div>
		</a>
	</div>
</div>


<?
$this->tpl('glavnaya-stranitsa/'.$this->lng.'-slider', array());
?>

<?
$this->tpl('glavnaya-stranitsa/'.$this->lng.'-blog', array());
?>

<?
//$this->tpl('glavnaya-stranitsa/'.$this->lng.'-footer', array());
$this->tpl('_/footer/'.$this->lng, array('class' => 'section footer-site', ));
?>

</div>

<script>
	if(device.desktop()) {
		$('#fullpage').fullpage({
			navigation: true,
			navigationPosition: 'right',
			scrollOverflow: true,
		});
	} else {
		$(window).on('resize', function(){
			$('.index__header.section').css({'height' : $(window).height()});
		});
		$(window).trigger('resize');
	}
</script>

<?
wp_footer();
?>

<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter36072875 = new Ya.Metrika({ id:36072875, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/36072875" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

</body>
</html>