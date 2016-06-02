<footer class="<?=$param['class'];?>" >
	<div class="footer-nav-block">
		<div class="container-fluid">
			<div class="col-xs-12 _b-footer-nav__flex">
				<div class="_b-footer-nav__contacts ">
					<div class="_b-footer-nav__logotip"><img src="<?=$this->path('img');?>/logotip-footer.png" alt=""></div>
					<div>
						
						<div><b>305029</b>, г. Курск, ул. К.Маркса, 62/21, оф.523</div>
						<div class="_b-footer-nav__contacts-phone">					
							<div><a href="tel:+74712530285">8 (4712) 53-02-85</a></div>
							<div><a href="tel:+79192112555">+7 (919) 211-25-55</a> – офис-менеджер</div>
							<div><a href="tel:+79155192779">+7 (915) 519-27-79</a> - тех. специалист</div>
						</div>
						<div><b>302030</b>, г. Орел, ул. С.Шаумяна, 35, оф.202</div>
						<div class="_b-footer-nav__contacts-phone">					
							<div><a href="tel:+74862443226">8 (4862) 44-32-26</a></div>
							<div><a href="tel:+79192112555">+7 (919) 211 25 55</a> – офис-менеджер</div>
							<div><a href="tel:+79192095900">+7 (919) 209-59-00</a> - тех. специалист</div>
						</div>
						
						<div><a href="mailto:info@rkorma.ru">info@rkorma.ru</a></div>
						<div class="_b-footer-nav__contacts-map">
							<a href="<?=l(5);?>" class="btn-footer">Посмотреть на карте</a>
						</div>						
					</div>
				</div>
				<div class="_b-footer-nav__item item1">
					<div class="_b-nav__item-icon icon1"></div>
					<ul>
						<li class="__heading">Для КРС</li>
						<?
						$this->tpl('_/footer/item_list', array('cat_id' => 4, 'parent_page_id' => 699));
						?>
					</ul>
				</div>
				<div class="_b-footer-nav__item item2">
					<div class="_b-nav__item-icon icon2"></div>
					<ul>
						<li class="__heading">Для свиней</li>
						<?
						$this->tpl('_/footer/item_list', array('cat_id' => 6, 'parent_page_id' => 697));
						?>
					</ul>
				</div>
				<div class="_b-footer-nav__item item3">
					<div class="_b-nav__item-icon icon3"></div>
					<ul>
						<li class="__heading">Для птицы</li>
						<?
						$this->tpl('_/footer/item_list', array('cat_id' => 5, 'parent_page_id' => 695));
						?>
					</ul>
				</div>
				<div class="_b-footer-nav__item item4">
					<div class="_b-nav__item-icon icon4"></div>
					<ul>
						<li class="__heading">Собственное производство</li>
						<?
						$this->tpl('_/footer/item_list', array('cat_id' => 3, 'parent_page_id' => 701));
						?>
					</ul>
				</div>
				<div class="_b-footer-nav__item item5">
					<div class="_b-nav__item-icon icon5"></div>
					<ul>
						<li class="__heading">Кормопроизводство</li>
						<?
						$this->tpl('_/footer/item_list', array('cat_id' => 7, 'parent_page_id' => 703));
						?>
					</ul>

						
				</div>
			</div>			 
		</div>		 
	</div>
	<div class="footer-autor-block">
		<div class="container-fluid">
			<div class="col-xs-12">
				<div class="_b-footer-nav__flex">
					<div>&copy; 2013-<?=date("Y");?>, ООО «РегионКорма»  Все права защищены</div>
					<div class="dorohovdesign">Сделано в <a href="http://www.dorohovdesign.ru/" target="_blank">Dorohovdesign</a></div>
				</div>
			</div>		
		</div>		
	</div>
</footer>

<!-- Start SiteHeart code -->
<script>
(function(){
var widget_id = 839140;
_shcp =[{widget_id : widget_id, hide : false, hide_offline : false}];
var lang =(navigator.language || navigator.systemLanguage 
|| navigator.userLanguage ||"en")
.substr(0,2).toLowerCase();
var url ="widget.siteheart.com/widget/sh/"+ widget_id +"/"+ lang +"/widget.js";
var hcc = document.createElement("script");
hcc.type ="text/javascript";
hcc.async =true;
hcc.src =("https:"== document.location.protocol ?"https":"http")
+"://"+ url;
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hcc, s.nextSibling);
})();
</script>
<!-- End SiteHeart code -->