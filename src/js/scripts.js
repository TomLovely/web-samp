///import jQuery from 'jquery'
//import owlCarousel from 'owl.carousel'
import 'bootstrap'
//const dgram = require('dgram');
//const Iconv = require('iconv-lite');


/*SA.info('185.169.134.4', 7777)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));*/
//
///import TweenMax from "gsap"

/*let window_step = 1;
let lastScrollTop = 0;
let aos = 0;

$(window).scroll(() => {
  if(aos) return 1;
  //
  let scrollTop = $(window).scrollTop();
  let scrollBottom = $(window).scrollTop() + $(window).height();
  //
  let center_scroll = $('.center_screen').offset();
  //
  if(scrollTop > lastScrollTop){
    if(typeof center_scroll.top !== 'undefined') {
      if(scrollBottom >= center_scroll.top && window_step == 1){
        window_step = 2;
        aos = 1;
        $('html, body').animate({ scrollTop: center_scroll.top }, 1000, () => { aos = 0; });
      }
    }
    //down
  }
  else {
    if(typeof center_scroll.top !== 'undefined') {
      if(scrollBottom < (center_scroll.top + $('.center_screen').height()) && window_step == 2) {
        window_step = 1;
        aos = 1;
        $('html, body').animate({ scrollTop: 0 }, 1000, () => { aos = 0; });
      }
    }
    //up
  }
  lastScrollTop = scrollTop;
});*/

$('.nav-bar .nav-item:nth-child(3) a').click((event) => { $('html, body').animate({ scrollTop: $('.center_screen').offset().top }); });
$('.nav-bar .nav-item:nth-child(4) a').click((event) => { $('html, body').animate({ scrollTop: $('.bottom_screen_body').offset().top }); });


$(document).ready(() => {
  setTimeout(() => {
    if(jQuery('.nav-toogler').length) {
      jQuery('.nav-toogler').removeClass('active');
    }
  }, 0);
  if(jQuery('.nav-bar').length) {
    jQuery('.nav-bar').removeClass('open');
  }
  //
  $('.nav-bar').attr('class', 'nav-bar nav-hover-1');
  $('.nav-bar .nav-item:nth-child(1)').hover((event) => { $('.nav-bar').attr('class', 'nav-bar nav-hover-1'); }, (event) => { });
  $('.nav-bar .nav-item:nth-child(2)').hover((event) => { $('.nav-bar').attr('class', 'nav-bar nav-hover-2'); }, (event) => { });
  $('.nav-bar .nav-item:nth-child(3)').hover((event) => { $('.nav-bar').attr('class', 'nav-bar nav-hover-3'); }, (event) => { });
  $('.nav-bar .nav-item:nth-child(4)').hover((event) => { $('.nav-bar').attr('class', 'nav-bar nav-hover-4'); }, (event) => { });
  //
  $('.bottom_select_input').removeClass('focused');
  //
  $('.bottom_select_input input').focusin((event) => {
    $(event.target).parent().addClass('focused');
  });
  $('.bottom_select_input input').focusout((event) => {
    $(event.target).parent().removeClass('focused');
  });
  //
});

jQuery('.nav-toogler').on('click', (event) => {
  if(jQuery('.nav-toogler').attr('class').indexOf('active') == -1) {
    jQuery('.nav-toogler').addClass('active');
    jQuery('.nav-bar').addClass('open');
  }
  else {
    jQuery('.nav-toogler').removeClass('active');
    jQuery('.nav-bar').removeClass('open');
  }
})
