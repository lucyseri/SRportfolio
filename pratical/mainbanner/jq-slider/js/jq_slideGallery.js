const slideCount = $('.slide').length;
let currentCount = 0;
//page num
$('.total-num').text(slideCount);
//height
let slideHeight = 0;
for(let a = 0; a < slideCount; a++){
  if(slideHeight < $('.slide').eq(a).outerHeight()){
    slideHeight = $('.slide').eq(a).outerHeight();
  };
};
$('.container').css("height",  slideHeight + "px");
//setting
const slideGap = ($('.slide').eq(1).offset().left - $('.slide').eq(0).offset().left);
let firstSlide = slideCount - 3;
let slideWidth = $('.slide').eq(0).outerWidth();
$(function(){
  $('.slide:gt('+firstSlide+')').prependTo('.gallery');
  $('.gallery').css("left", slideGap * -1 + "px");
});
//slideFn
function slideFn(){
  $('.gallery').animate({left: '-='+slideGap+"px"}, 500, "swing", function(){
    $('.slide:first').appendTo(".gallery");
    $('.gallery').css('left', slideGap * -1 + "px");
    currentCount++;
    if(currentCount > slideCount) currentCount = 1;
    $('.current-num').text(currentCount);
  });
};
slideFn();
let slideInt = setInterval(slideFn, 4000);
//arrow btn
$('.left-btn').on({
  'click' : function(){
  currentCount++;
  if(currentCount > slideCount) currentCount = 1;
  $('.current-num').text(currentCount);
  $('.gallery').animate({left: '-='+slideGap+"px"},500, "swing", function(){
    $('.slide:first').appendTo('.gallery');
    $('.gallery').css('left', slideGap*-1+"px");
  });
}, 'mouseenter' : function(){
  clearInterval(slideInt);
}, 'mouseleave' : function(){
  slideInt = setInterval(slideFn, 4000);
}
});
$('.right-btn').on({'click' : function(){
  currentCount--;
  if(currentCount <= 0) currentCount = slideCount;
  $('.current-num').text(currentCount);
  $('.slide:last').prependTo('.gallery');
  $('.gallery').css('left', slideGap*-2+"px");
  $('.gallery').animate({left: '+='+slideGap+"px"}, 500, "swing")
}, 'mouseenter' : function(){
  clearInterval(slideInt);
}, 'mouseleave' : function(){
  slideInt = setInterval(slideFn, 4000);
}
});