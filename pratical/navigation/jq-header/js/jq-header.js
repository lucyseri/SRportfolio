//mode
//.mode-btn.easy-mode
$('.switch').on('click', function(){
  const modeBtn = $('.mode-btn');
  if(modeBtn.hasClass('easy-mode')){
    $('.mode-btn').removeClass('easy-mode');
  }else{
    $('.mode-btn').addClass('easy-mode');
  }
});
//sliding menu
$('.category a').on('click', function(){
  $(this).preventDefault;
  $('.sliding-menu').addClass('slide-in');
});
$('.close-icon').on('click', function(){
  $('.sliding-menu').removeClass('slide-in');
});
$(function(){
  const depth1 = $('.depth1');
  const depth1Btn = $('.arrow-icon');
  depth1Btn.on('click', function(){
    const item = $(this);
    let speed = 300;
    depth1.find('.depth2').stop().slideUp(speed);
    if(item.hasClass('active')){
      item.parent().parent().parent().find('.depth2').stop().slideUp(speed);
      item.removeClass("active");
    }else{
      item.parent().parent().parent().find('.depth2').stop().slideDown(speed);
      depth1Btn.removeClass('active');
      item.addClass('active');
    }
  })
});