function web_cardClider(a){
	var h = $('.card-slider').outerHeight();
	$('#btn_more1').on('click', function(e){
		$('.product_list .more_box').fadeIn(0).animate({'height': h+108+"px" },500);
		$('.product_list').addClass('add');
		return false;
	});

	$('#btn_s1_close').on('click', function(e){
		$('.product_list .more_box').animate({'height':'334px'},400);
		$('.product_list').removeClass('add');
		return false;
	});

	var h2 = $('.card-slider2').outerHeight();
	$('#btn_more2').on('click', function(e){
		$('.event_list .more_box').fadeIn(0).animate({'height':h2+134+"px" },500);
		$('.event_list').addClass('add');
		return false;
	});

	$('#btn_s2_close').on('click', function(e){
		$('.event_list .more_box').animate({'height':'374px'},400);
		$('.event_list').removeClass('add');
		return false;
	});

};

function mo_cardClider(a){
	var h = $('.card-slider').outerHeight();
	$('#btn_more1').on('click', function(e){
		$('.product_list .more_box').fadeIn(0).animate({'height': h+135+"px" },500);
		$('.product_list').addClass('add');
		return false;
	});

	var hm = $('.card-slider li').outerHeight();
	$('#btn_s1_close').on('click', function(e){
		$('.product_list .more_box').animate({'height':hm+hm-30+"px"},400);
		$('.product_list').removeClass('add');
		return false;
	});
	$('.product_list .more_box').css({'height':hm+hm-30+"px"});

	var h2 = $('.card-slider2').outerHeight();
	$('#btn_more2').on('click', function(e){
		$('.event_list .more_box').fadeIn(0).animate({'height':h2+134+"px" },500);
		$('.event_list').addClass('add');
		return false;
	});

	var hm2 = $('.card-slider li').outerHeight();
	$('#btn_s2_close').on('click', function(e){
		$('.event_list .more_box').animate({'height':hm2+hm2+30+"px"},400);
		$('.event_list').removeClass('add');
		return false;
	});
	$('.event_list .more_box').css({'height':hm2+hm2+30+"px"});
};


function pc_move(a){
	//go_list
	var go_list2 = $('#go_list').bxSlider({
		auto: false,
		autoControls: false,
		autoReload : false,
		speed:1000,
		pause: 1000,
		slideWidth: 'auto',
		slideMargin: 0,
		infiniteLoop : false,
		autoHover : true,
		pager:true,
		moveSlides: 1,
		controls: false,
		randomStart:false
	});
	$('#go-prev2, #go-next2').on('click', function(e){
		var className = $(this).attr('class');
		cardMove(go_list2, className);
		return false;
	});


	//main-box
	$('.visual_box .t1').stop().delay(700).animate({'opacity':'1', 'top':'180px'},600);
	$('.visual_box .t2').stop().delay(1400).animate({'opacity':'1', 'top':'340px'},600);
	$('.visual_box a').stop().delay(2000).animate({'opacity':'1'},600);
};

function mo_move(a){
	var goW = $(window).width();
	var go_list2 = $('#go_list').bxSlider({
		auto: false,
		autoControls: false,
		autoReload : false,
		speed:1000,
		pause: 1000,
		slideWidth: goW,
		slideMargin: 0,
		infiniteLoop : false,
		autoHover : true,
		pager:true,
		moveSlides: 1,
		controls: false,
		randomStart:false
	});
	$('#go-prev2, #go-next2').on('click', function(e){
		var className = $(this).attr('class');
		cardMove(go_list2, className);
		return false;
	});
};

$(function() {
	$(window).on({
		load: function () {
			if ($(window).width() > 980) {
				pc_move();
			}
			if ($(window).width() > 760) {
				web_cardClider();
				mo_move();
				//main-box
				$('.visual_box .t1').stop().delay(700).animate({'opacity':'1', 'top':'225px'},600);
				$('.visual_box a').stop().delay(2000).animate({'opacity':'1'},600);
			}
			if ($(window).width() > 650) {
				$('.visual_box .t1').stop().delay(700).animate({'opacity':'1', 'top':'225px'},600);
				$('.visual_box a').stop().delay(2000).animate({'opacity':'1'},600);
			}
			else {
				mo_cardClider();
				mo_move();
				$('.visual_box .t1').stop().delay(700).animate({'opacity':'1', 'top':'120px'},600);
				$('.visual_box a').stop().delay(2000).animate({'opacity':'1'},600);
			}
		},
		resize: function () {
			if ($(window).width() > 980) {
				pc_move();
			}
			if ($(window).width() > 760) {
				web_cardClider();
				mo_move();
				//main-box
				$('.visual_box .t1').stop().delay(700).animate({'opacity':'1', 'top':'225px'},600);
				$('.visual_box a').stop().delay(2000).animate({'opacity':'1'},600);
			}
			if ($(window).width() > 650) {
				$('.visual_box .t1').stop().delay(700).animate({'opacity':'1', 'top':'225px'},600);
				$('.visual_box a').stop().delay(2000).animate({'opacity':'1'},600);
			}
			else {
				mo_cardClider();
				mo_move();
				$('.visual_box .t1').stop().delay(700).animate({'opacity':'1', 'top':'120px'},600);
				$('.visual_box a').stop().delay(2000).animate({'opacity':'1'},600);
			}
		}
	});
	


	//visual
	var swiper = new Swiper("#visual_banner", {
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			//type: 'fraction',
        },
	});


	//product_box	
	$('.product_box .tab_ty1 li a').click(function(){
		$('.product_box .tab_container').fadeIn(300);
		$('.product_box .tab_ty1 li').removeClass('active');
		$(this).parent().addClass('active');
		$(".tab_content").hide();
		$(".product_box").animate({'opacity':'1'},500).addClass('on');
		var activeTab = $(this).attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$('.product_box #btn_mv_close').click(function(){
		$('.product_box .tab_container').fadeOut(300);
		$('.product_box .tab_ty1 li').removeClass('active');
		$(".product_box").removeClass('on');
		return false;
	});


	//헤드고정 스크롤높이
    if($("#header").length > 0) {
        var headFixTop = $("#header").height()/2; // 탭메뉴 스크롤높이
    } else {
        var headFixTop = 100;
    } 
    
    // 윈도우스크롤
    $(window).on("scroll", function(){
        headFix();
    });

	// 상단헤드고정    
    function headFix(){        
        if($("header").is(":hidden") || $("#header").length == 0) return false;
        if($(window).scrollTop() > headFixTop) $("body").addClass("head_fix");            
        else $("body").removeClass("head_fix");
    }

});