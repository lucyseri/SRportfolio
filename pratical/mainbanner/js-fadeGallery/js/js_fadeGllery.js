const section = document.querySelector('section');
const gallery = document.querySelector('.gallery');
const slide = document.querySelectorAll('li.slide');
const currentNum = document.querySelector('.current-num');
const totalNum = document.querySelector('.total-num');
const prevBtn = document.querySelector('span.btn.prev');
const puaseBtn = document.querySelector('span.btn.puase');
const nextBtn = document.querySelector('span.btn.next');
//height
let slideHeight = 0;
for(let a = 0; a < slide.length; a++){
  if(slideHeight < slide[a].offsetHeight){
    slideHeight = slide[a].offsetHeight;
  }
};
section.style.height = slideHeight + "px";
//total num
totalNum.innerText = slide.length;
//fade fn
function fadeFn(num){
  slide.forEach((el, idx)=>{
    if(idx == num){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  })
  currentNum.innerText = num + 1;
};
//timer
let i = -1;
function autoFade(){
  i++;
  if(i >= slide.length){
    i = 0;
  }else if(i < 0){
    i = slide.length -1;
  };
  fadeFn(i);
}
let fadeInt = setInterval(autoFade, 4000);
(()=>{autoFade()})();
//btn fn
let trigger = true;
puaseBtn.addEventListener('click', function(e){
  if(trigger){
    clearInterval(fadeInt);
    puaseBtn.style.backgroundImage = 'url("img/play.svg")';
    trigger = false;
  }else{
    fadeInt = setInterval(autoFade, 4000);
    puaseBtn.style.backgroundImage = 'url("img/pause.svg")';
    trigger = true;
  }
});
prevBtn.addEventListener('mouseover', function(){
  if(trigger){
    clearInterval(fadeInt);
  }else{
    return
  }
});
prevBtn.addEventListener('mouseout', function(){
  if(trigger){
    fadeInt = setInterval(autoFade, 4000);
  }else{
    return
  }
});
prevBtn.addEventListener('click', function(){
  i--;
  if(i<0)  i = slide.length-1;
  fadeFn(i);
});
nextBtn.addEventListener('mouseover', function(){
  if(trigger){
    clearInterval(fadeInt);
  }else{
    return
  }
});
nextBtn.addEventListener('mouseout', function(){
  if(trigger){
    fadeInt = setInterval(autoFade, 4000);
  }else{
    return
  }
});
nextBtn.addEventListener('click', function(){
  i++;
  if(i>slide.length-1) i = 0;
  fadeFn(i);
});