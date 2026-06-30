//mobile menu slide-in & slide-out
const mobileMenu = document.querySelector('.menu-icon');
const mibileClose = document.querySelector('.close-icon');
const bottomHeader = document.querySelector('.bottom-header');
const main = document.querySelector('.container');
//menu bar
const menuBar = document.querySelector('.menu-bar');
const topHeader = document.querySelector('.top-header');
const header = document.querySelector('header');
//mobile dropdown menu
const gnb = document.querySelector(".gnb");
const gnbLi = document.querySelectorAll('.gnb-list');
const gnbArrowBtn = document.querySelectorAll('span.arrow-icon');
const lnb = document.querySelectorAll('.lnb')
//media query
let x = window.matchMedia("(max-width: 768px)");
function tabletFn(x){
  if(x.matches){
    console.log("768")
    //mobile menu slide-in & slide-out
    mobileMenu.addEventListener('click', function(){
      bottomHeader.classList.add("menu-on");
      main.classList.add('menu-show');
    });
    mibileClose.addEventListener('click', function(){
      bottomHeader.classList.remove("menu-on");
      main.classList.remove('menu-show');
    });
    //mobile dropdown menu
    gnbArrowBtn.forEach((el, idx)=>{
      el.addEventListener('click', function(e){
        if(el.classList.contains('drop-down')){
          el.classList.remove('drop-down');
          gnbLi[idx].style.height = gnbLi[idx].firstElementChild.offsetHeight + "px";
        }else{
          for(let i=0; i<gnbArrowBtn.length; i++){
            gnbArrowBtn[i].classList.remove('drop-down');
            gnbLi[i].style.height = gnbLi[i].firstElementChild.offsetHeight + "px";
          }
          el.classList.add('drop-down');
          gnbLi[idx].style.height = `${gnbLi[idx].firstElementChild.offsetHeight + lnb[idx].offsetHeight}px`;
        }
      })
    });
  }else{
    console.log("769")
    //menu bar
    function barSetting(){
      menuBar.style.left = gnbLi[0].offsetLeft + "px";
      menuBar.style.top = gnbLi[0].firstElementChild.offsetHeight + topHeader.offsetHeight - menuBar.offsetHeight + "px";
      menuBar.style.width = gnbLi[0].offsetWidth + "px";
    };
    barSetting();
    gnbLi.forEach((el, idx)=>{
      el.addEventListener('mouseenter', (e)=>{
        menuBar.style.left = gnbLi[idx].offsetLeft + "px";
        menuBar.style.width = gnbLi[idx].offsetWidth + "px";
        menuBar.style.opacity = 1;
      });
    });
    header.addEventListener('mouseleave', (e)=>{
      menuBar.style.opacity = 0;
      barSetting();
    });
  }
};
tabletFn(x);
x.addEventListener('change', function(){
  tabletFn(x);
});