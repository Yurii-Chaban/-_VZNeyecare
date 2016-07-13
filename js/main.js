var swiper_main = new Swiper('.swiper-container-main', {
    pagination: '.swiper-pagination',
	paginationClickable: true,
	loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    autoplayDisableOnInteraction: false
});
var swiper_main = new Swiper('.swiper-container-bunner', {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    autoplayDisableOnInteraction: false
});
$(document).ready(function($) {
	$('.ui.dropdown')
	  .dropdown()
	;
});
$(function () {
    $('.hidden-menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('active-mobile');
        }
    });
});
$(function () {
    $('.list-menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('active-desctop');
        }
    });
});
$(function () {
    $('.footer-menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('active-footer');
        }
    });
});
$(function () {
    $('.quick-links li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('quickactive');
        }
    });
});
$(function () {
    $('.our-services li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('our-services-active');
        }
    });
});
$(function () {
    $('.our-store li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('our-store-active');
        }
    });
});
$(function () {
    $('.contact-us li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('contact-us-active');
        }
    });
});
/*-----------------------------------------*/
/*-------------for contact page form--------*/
$(document).ready(function($) {
    $(".form-row i.dropdown").addClass("fa fa-angle-down");
    $(".form-row i.dropdown").removeClass("dropdown");
});
/*-----------------------------------------*/