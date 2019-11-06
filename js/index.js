$(function() {
	// 懒加载
	handscroll();
	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//滚顶到指定地点

	$(".header_nav>div").click(function() {
		let index = $(this).index();
		if(index == 0) {
			let scrollVal = $(".aboutBright").offset().top;
			$('html,body').animate({
				"scrollTop": scrollVal
			}, 1000);
		}
		if(index == 1) {
			let scrollVal = $(".my_drame").offset().top;
			$('html,body').animate({
				"scrollTop": scrollVal
			}, 1000);
		}
		if(index == 2) {
			let scrollVal = $(".work_time").offset().top;
			$('html,body').animate({
				"scrollTop": scrollVal
			}, 1000);
		}
	})

	$(window).scroll(function(event) {
		if($(this).scrollTop() == 0) {
			$("#toTop").hide();
		}
		if($(this).scrollTop() != 0) {
			$("#toTop").show();
		}
	});
	$("#toTop").click(function(event) {
		$("html,body").animate({
			scrollTop: "0px"
		}, 1000);
	});

	//设置高度
	for(var k = 0; k < $(".work_time_botCent>div").length; k++) {
		var heg = $(".work_time_botCent").children("div").eq(k).height();
		$(".work_time_bot_center").children("div").eq(k).children(".line").height(heg);
	}
	//动画
	wow = new WOW({
		animateClass: 'animated',
	});
	wow.init();
	//	图片懒加载
	$(window).scroll(function() {
		handscroll();
	});
	function handscroll() {
		let imgs = $("img[data-src]");
		let bodyScrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
		let windowHeight = window.innerHeight;
		for(let k = 0; k < imgs.length; k++) {
			let imgHeight = $(imgs[k]).offset().top;
			let imgData = $(imgs).eq(k).attr("data-src");
			var newImg = new Image();
			newImg.src = imgData;
			newImg.onload = () => {
				// 图片加载成功后把地址给原来的img
				if(imgHeight < (bodyScrollHeight + windowHeight) && imgHeight >= bodyScrollHeight) {
					setTimeout(function() {
						$(imgs).eq(k).attr("src", imgData);
					}, 1000);
				}
			}
		}
	}
});