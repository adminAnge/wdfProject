// 20170922
$(function(){
	$(".navbar-toggle").click(function () {
       $('.nav').slideToggle();
        $(this).toggleClass("too").toggleClass('to');
    });
    $('.index_brand_list').find('a').each(function(index) {
        $(this).hover(function() {
            $(this).find('.index_brand_list_txt').stop().slideDown();
        }, function() {
            $(this).find('.index_brand_list_txt').stop().slideUp();
        });
    });
    $('.index_news_list').find('li').each(function(index, el) {
        $(this).hover(function() {
            $(this).find('.index_news_list_hr').removeClass('index_news_list_txt_hr_back').addClass('index_news_list_txt_hr_hover');
            $(this).find('.index_news_list_span').removeClass('index_news_list_txt_span_back').addClass('index_news_list_txt_span_hover');            
        }, function() {
            $(this).find('.index_news_list_hr').removeClass('index_news_list_txt_hr_hover').addClass('index_news_list_txt_hr_back');
            $(this).find('.index_news_list_span').removeClass('index_news_list_txt_span_hover').addClass('index_news_list_txt_span_back');  
        });        
    });
    $('.index_cooperation_list').bind('mouseover', function(event) {
        $('.index_cooperation_btn').show();
    });
    $('.index_cooperation_list').bind('mouseout', function(event) {
        $('.index_cooperation_btn').hide();
    });
    var scrTop,screenHeight,height = null;
    $(window).scroll(function(event) {            
        scrTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        height = scrTop + screenHeight;
        $('.brand_list_animate_left,.brand_list_animate_right').each(function(index) {
            if ($(this).offset().top <= height - 150) {
                $(this).addClass('show');
            }else {
                $(this).removeClass('show');
            }
        });
    }).trigger('scroll');


})
window.onresize = function() {
 	if($(window).width() > 768){
        $(".navbar-toggle").addClass('too').removeClass('to');
        $(".nav").show();
    }else {
        $(".nav").hide();
        $(".navbar-toggle").addClass('to').removeClass('too');
    }
    rem();
}
 rem();
function rem(){
	var winW = window.innerWidth;
    if(winW > 1200){
        winW = 12;
    }
    var dic = 12;
    var html = document.getElementsByTagName('html');
    html[0].style.fontSize = winW/dic + 'px';
}
function swiperBanner() {
	var swiper = new Swiper('.banner', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });
}

