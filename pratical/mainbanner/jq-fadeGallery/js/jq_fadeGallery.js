const slideCount = $('.slide').length;
let slideHeight = 0;
//height
for(let b =0; b < slideCount; b++){
  if(slideHeight < $('.slide').eq(b).outerHeight()){
    slideHeight = $('.slide').eq(b).outerHeight();
  }
  $('section').css('height', slideHeight+"px");
}
//pager fn
function pagerOnFn(num){
  for(let a = 0; a < slideCount; a++){
    $('.pager-btn').eq(a).removeClass('active');
  }
  $('.pager-btn').eq(num).addClass('active');
};
//fade fn
function fadeFn(num){
  $('.slide').eq(num).fadeIn(300,function(){
    $('.slide').eq(num).siblings().fadeOut(300);
  })
};
//timer
let currentSlide = -1;
function autoFadeFn(){
  currentSlide++;
  if(currentSlide >= slideCount) currentSlide = 0;
  fadeFn(currentSlide);
  pagerOnFn(currentSlide);
};
autoFadeFn();
let fadeInt = setInterval(autoFadeFn, 5000);
//arrow
$('span.right').on({
  'mouseenter' : function(){
    clearInterval(fadeInt);
  }, 'mouseout' : function(){
    fadeInt = setInterval(autoFadeFn, 3000);
  }, 'click' : function(){
    currentSlide++;
    if(currentSlide >= slideCount) currentSlide = 0;
    fadeFn(currentSlide);
    pagerOnFn(currentSlide);
  }
});
$('span.left').on({
  'mouseenter' : function(){
    clearInterval(fadeInt);
  }, 'mouseout' : function(){
    fadeInt = setInterval(autoFadeFn, 3000);
  }, 'click' : function(){
    currentSlide--;
    if(currentSlide < 0) currentSlide = 2;
    fadeFn(currentSlide);
    pagerOnFn(currentSlide);
  }
});
//pager
$('.pager-btn').on({
  'mouseenter': function(){
    clearInterval(fadeInt);
  }, 'mouseout' : function(){
    fadeInt = setInterval(autoFadeFn, 3000);
  }, 'click' : function(){
    currentSlide = $(this).index();
    fadeFn(currentSlide);
    pagerOnFn(currentSlide);
  }
});