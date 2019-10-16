$(document).ready(function(){

	var menu_btn = document.getElementsByClassName('svg-menu');
	// console.log(menu_btn[0]);
	
	console.log(menu_btn[0]);

	menu_btn[0].onclick = function(event){
		if(menu_btn[0].childNodes[1].childNodes[0].classList.contains('open')){
			$('li.svg-menu').removeClass('open');
			$('li.svg-menu .menu-toggle span').removeClass('open');
			$('.menu').removeClass('open');
			$('.menu li.n-menu.lnk').css({'display':'none'});
			$('.top .nav').removeClass('open');
			$('li.n-menu img').css({'opacity':'1', 'display': 'block;'})
			$('.top .info').removeClass('open');
		}
		else{
			$('li.svg-menu').addClass('open');
			$('li.svg-menu .menu-toggle span').addClass('open');
			$('.menu').addClass('open');
			$('.menu li.n-menu.lnk').css({'display':'block'})
			$('.top .nav').addClass('open');
			$('li.n-menu img').css({'opacity':'0', 'display':'none'})
			$('.top .info').addClass('open');
		}
	}

	var window_zayavka = document.getElementsByClassName('zayavka');
	var window_zayavka_close = document.getElementsByClassName('close');

	window_zayavka[0].onclick = function(event){
		event.preventDefault();
		console.log(window_zayavka[0].parentElement.parentElement.parentElement.parentElement.childNodes[7]);

		if(window_zayavka[0].parentElement.parentElement.parentElement.parentElement.childNodes[7].classList.contains('open')){
			$('body > div.top > div.window-zayavka').removeClass('open');
			console.log(window_zayavka[0].parentElement.parentElement.parentElement.parentElement.childNodes[7]);
		}
		else{
			$('body > div.top > div.window-zayavka').addClass('open');
			console.log(window_zayavka[0].parentElement.parentElement.parentElement.parentElement.childNodes[7]);
		}
	}

	window_zayavka_close[0].onclick = function(event){
		// event.preventDefault();
		if(window_zayavka[0].parentElement.parentElement.parentElement.parentElement.childNodes[7].classList.contains('open')){
			$('body > div.top > div.window-zayavka').removeClass('open');
			console.log(window_zayavka[0].parentElement.parentElement.parentElement.parentElement.childNodes[7]);
		}
		else{
			$('body > div.top > div.window-zayavka').addClass('open');
			console.log(window_zayavka[0].parentElement.parentElement.parentElement.parentElement.childNodes[7]);
		}
	}

	$(window).scroll(function() {

		// console.log($(this).scrollTop());

		if($(this).scrollTop() > 200 && $(this).width() > 1200){
			
			$('body > div.top > div.nav').addClass('open');
			
			var attr = document.getElementById("logo");
			attr.src = "../img/logo_dark.png";
		}
		else if($(this).scrollTop() < 200 && $(this).width() > 1200){
			$('body > div.top > div.nav').removeClass('open');
			var attr = document.getElementById("logo");
			attr.src = "../img/logo_light.png";
		}
	})

	$('body > div.top > div.nav > div > div > li.n-menu.lnk').mousemove(function(e){
		console.log(event.target);
		$('body > div.top > div.nav > div.wrap > div.menu').css({
			'padding-bottom':'0'
		})
	})

	var plus = document.getElementsByClassName('m-el');
	console.log(plus);

	Object.keys(plus).forEach(function(item){
		plus[item].addEventListener('click', function(event){
			if(plus[item].classList.contains('open')){
				plus[item].classList.remove('open');
			}
			else{
				Object.keys(plus).forEach(function(all){
					plus[all].classList.remove('open');
				})
				plus[item].classList.add('open');
			}
		})
	})

})