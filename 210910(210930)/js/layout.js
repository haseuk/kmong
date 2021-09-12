//gnb
function web_menu(a){
	function chk(){
		if(cc == 1){
			//$("#gnb .menu li .submenu").fadeIn(.3).animate(  { height : 343 },  380);
			$("#gnb .menu li .submenu").fadeIn(0).css({"height":"343px"});
			$("#gnb").addClass('open');
		}else{
			//$("#gnb .menu li .submenu").fadeOut(.3).animate(  { height : 0 },  250);
			$("#gnb .menu li .submenu").fadeIn(0).css({"height":"0"});
			$("#gnb").removeClass('open');
		}
	};

	$('.pc-menu #gnb>.menu>li>a').mouseover(function(){
		setTimeout(chk, 100);
		cc = 0;
		$('#gnb .menu > li').removeClass('on');
		$(this).parent().addClass('on');
	});
	$('.pc-menu #gnb .submenu').mouseleave(function(){
		setTimeout(chk, 100);
		cc = 0;
		$('#gnb .menu > li').removeClass('on');
	});
	$('.pc-menu #gnb').mouseleave(function(){
		setTimeout(chk, 100);
		cc = 0;
		$('#gnb .menu > li').removeClass('on');
	});
	/*
	$('.pc-menu #gnb>.menu>li:first-child >a').focus(function(){
		setTimeout(chk, 100);
		cc = 1;
		$(this).parent().addClass('on');
	});*/

	$('.pc-menu #gnb>.menu>li:first-child >a').mouseover(function(){
		setTimeout(chk, 0);
		cc = 1;
		$('#gnb .menu > li').removeClass('on');
		$(this).parent().addClass('on');
	});


	$('.pc-menu #gnb .submenu > ul > li > a').mouseover(function(){
		$(".submenu ul ul").fadeOut(0);
		$('.pc-menu #gnb .submenu li').removeClass('on');
		//$(this).parent().find('ul').fadeIn(150);
		$(this).parent().addClass('on');
	});


};

function mobile_menu(a){
	var depth1 = $("#gnb > .menu "),
		dep1_length = depth1.find(" > li").size();
	depth1.find(" > li > div").addClass('top2m');
	depth1.off();
	depth1.find(" > li > a").off();
	depth1.find(" > li > a").siblings().fadeOut();
	var depth2 = $(".submenu > ul ");

	depth1.find(" >  li:first-child > a").on('click',function(event){
		event.preventDefault ();
		var m_open=$(this).hasClass('active');
		if(m_open==true){
			depth1.find(" > li > ul ").slideUp(0);
			$(this).removeClass('active');
		}else{
			depth1.find(" > li > ul ").slideUp(0);
			$(this).parent().find(".submenu").slideDown(150);
			depth1.find(" a ").removeClass('active');
			$(this).addClass('active');
			$('#gnb').addClass('depth2');
		}
	});

	depth2.find(" >  li > a").on('click',function(event){
		event.preventDefault ();
		var m_open=$(this).hasClass('active');
		if(m_open==true){
			depth2.find(" > li > ul ").hide(0);
			$(this).removeClass('active');
		}else{
			depth2.find(" > li > ul ").slideUp(0);
			$(this).parent().find("ul").show(150);
			depth2.find(" a ").removeClass('active');
			$(this).addClass('active');
			$('#gnb').removeClass('depth2');
			$('#gnb').addClass('depth3');
		}
	});


	var lnb = $('#gnb'),
		m_nav_open = $('#open_mn'),
		m_nav_close = $('#close_mn a'),
		m_nav_bak = $('#bak_mn a'),
		m_close = $('.mask'),
		bodyFrame = $( 'body, html' );
	 	m_nav_display=false;

	m_nav_open.click(function() {
		var h = $(window).height();
		lnb.fadeIn(0).animate(  { right : 0 },  400);
		bodyFrame.css("overflow",'hidden');
		$('body').addClass('open-menu');
	});
	m_nav_close.click(function() {
		lnb.animate(  { right : -1300 },  400);
		bodyFrame.css('overflow', '' );
		$('body').removeClass('open-menu');
		depth1.find(" > li > ul ").slideUp(0);
		depth1.find(" >  li:first-child > a").removeClass('active');
		$('#gnb').removeClass('depth2');
		$('#gnb').removeClass('depth3');
		depth1.find(" > li > ul ").slideUp(0);
		return false;
	});
	m_close.click(function() {
		lnb.animate(  { right : -1300 },  400);
		bodyFrame.css('overflow', '' );
		$('body').removeClass('open-menu');
		depth1.find(" > li > ul ").slideUp(0);
		depth1.find(" a ").removeClass('active');
		$('#gnb').removeClass('depth2');
		$('#gnb').removeClass('depth3');
	});
	m_nav_bak.click(function() {
		bodyFrame.css('overflow', '' );
		$('body').removeClass('open-menu');
		depth1.find(" > li > ul ").slideUp(0);
		depth1.find(" >  li:first-child > a").removeClass('active');
		$('#gnb').removeClass('depth2');
		$('#gnb').removeClass('depth3');
		depth1.find(" > li > ul ").slideUp(0);
		return false;
	});

	$('#gnb .submenu > ul > li').removeClass('on');
};


//fullpage
function pc_fullpage(a){
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		'navigation': false,
		'responsiveWidth': 1199,
		'anchors': ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', 'lastPage'],
		//'menu': '#product_menu',
	});
};
var isMobile = function(){
	var w = window.innerWidth;
	return (w < 1200) ? true : false;
};
var isFullPage = function(){
	return $('#fullpage').length > 0;
}


//menuSlider
function Mo_menuSlider(a){
	var menuSlider = $('#menu-slider').bxSlider({
		auto: false,
		autoControls: true,
		autoReload : false,
		speed:1000,
		pause: 1000,
		slideWidth: 'auto',
		slideMargin: 30,
		infiniteLoop : false,
		autoHover : true,
		pager:false,
		maxSlides: 4,
		moveSlides: 1,
		controls: false,
		touchEnabled : (navigator.maxTouchPoints > 0)
	});
	$( '#p_menu_prev' ).on( 'click', function () {
		menuSlider.goToPrevSlide();
		return false;
	} );
	$( '#p_menu_next' ).on( 'click', function () {
		menuSlider.goToNextSlide();
		return false;
	} );
};

//calendar-slider
function Mo_calendarSlider(a){
	var calendarSlider = $('#calendar-slider').bxSlider({
		auto: false,
		autoControls: true,
		autoReload : false,
		speed:1000,
		pause: 1000,
		slideWidth: 'auto',
		slideMargin: 0,
		infiniteLoop : false,
		autoHover : true,
		pager:false,
		maxSlides: 4,
		moveSlides: 1,
		controls: false,
		touchEnabled : (navigator.maxTouchPoints > 0)
	});
	$( '#c_menu_prev' ).on( 'click', function () {
		calendarSlider.goToPrevSlide();
		return false;
	} );
	$( '#c_menu_next' ).on( 'click', function () {
		calendarSlider.goToNextSlide();
		return false;
	} );
};

$(function() {
	//gnb
	$(window).on({
		load: function () {
			if ($(window).width() > 1279) {
				$('.submenu').hide();
				$('body').addClass('pc-menu');
				$('#gnb').animate(  { right : 0 },  0);
				$('body').removeClass('open-menu');
				web_menu();
			}
			else {
				$('.submenu').hide();
				$('body').removeClass('pc-menu');
				$('#gnb').animate(  { right :  -1300 },  0);
				mobile_menu();
				Mo_menuSlider();
				Mo_calendarSlider();
			}
		},
		resize: function () {
			if ($(window).width() > 1279) {
				$('body').addClass('pc-menu');
				$('#gnb').animate(  { right : 0 },  0);
				$('body').removeClass('open-menu');
				$('.submenu').css('height', '0' );
				$("#gnb > .menu ").find(" a ").removeClass('active');
				$('#gnb').removeClass('depth2');
				web_menu();
			}
			else {
				$('body').removeClass('pc-menu');
				$('#gnb').animate(  { right :  -1300 },  0);
				mobile_menu();
				Mo_menuSlider();
				Mo_calendarSlider();
			}
		}
	});

	//search
	$('#btn_top_search').click(function(){
		$('.search_top').fadeIn();
	});
	$('.search_top .btn_close').click(function(){
		$('.search_top').fadeOut();
	});

	//top_banner
	var swiper = new Swiper("#top_banner", {
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
	});
	$('#top_banner .btn_close').click(function(){
		$('#top_banner').animate({'opacity':'0'},100);
		$('#top_banner').slideUp(200);
		$('body').addClass('top_banner');
	});


	//gnb_banner
	var swiper = new Swiper('.gnb_banner', {
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
        },
	});

	//select
	$(".select2").select2({
		minimumResultsForSearch: Infinity
	});

	//modal
	$('a[href="#modal_ty1"]').click(function(event) {
		event.preventDefault();
		$(this).modal({
			fadeDuration: 400,
			fadeDelay: 0.40
		});
    });

	//tab_ty1
	$(".tab_container .tab_content").hide();
	$(".tab_container .tab_content:first").show();
	$(".modal ul.tab_ty1 li:first").addClass("active");

	$(".modal ul.tab_ty1 li a").click(function () {
		$("ul.tab_ty1 li").removeClass("active");
		$(this).parent().addClass("active");
		$(".tab_content").hide()
		var activeTab = $(this).attr("href");
		$(activeTab).fadeIn();
	});

	//tab_ty2
	$(".tab_container2 .tab_content2").hide();
	$(".tab_container2 .tab_content2:first").show();
	$("ul.tab_ty2 li:first").addClass("active");

	$("ul.tab_ty2 li a").click(function () {
		$("ul.tab_ty2 li").removeClass("active");
		$(this).parent().addClass("active");
		$(".tab_content2").hide()
		var activeTab = $(this).attr("href");
		$(activeTab).fadeIn();
	});


	//list_file
	$('.list_file li').mouseover(function(){
		$('.list_file li').removeClass('on');
		$(this).addClass('on');
	});
	$('.list_file').mouseleave(function(){
		$('.list_file li').removeClass('on');
	});


	//pc_fullpage
	if(isMobile()){ $('#fullpage').removeAttr('id'); }
	$(window).on({
		load: function () {
			if (!isMobile()) {
				pc_fullpage();
			}
			else {
				//pc_fullpage.stop();
			}
		},
		resize: function () {
			if (!isMobile()) {
				pc_fullpage();
			}
			else {
				//pc_fullpage.stop();
			}
		}
	});

	//top_banner
	var swiper = new Swiper("#product_banner", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
        },
	});

});


$(document).ready(function() {
	//main-box
	$('.sub_visual.sub7 h1').css({'opacity':'0', 'margin-top':'50px'});
	$('.sub_visual.sub7 h1').stop().delay(700).animate({'opacity':'1', 'margin-top':'0'},800);
	$('.sub_visual.sub7 p').css({'opacity':'0', 'margin-top':'100px'});
	$('.sub_visual.sub7 p').stop().delay(1400).animate({'opacity':'1', 'margin-top':'50px'},800);
	$('.sub_visual.sub7 a').css({'opacity':'0', 'margin-top':'50px'});
	$('.sub_visual.sub7 a').stop().delay(1900).animate({'opacity':'1', 'margin-top':'0'},800);

	$('.company_box1 dl').css({'opacity':'0', 'margin-top':'50px'});
	$('.company_box1 dl').stop().delay(1900).animate({'opacity':'1', 'margin-top':'0'},800);
});