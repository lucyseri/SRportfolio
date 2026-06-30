const body = document.querySelector('body');
const closeBtn = document.querySelector('.close-btn');
const header = document.querySelector('header');
const searchIcon = document.querySelector('.search-icon');
const modeTxt = document.querySelector('.mode-label .txt')
const modeSwitch = document.querySelector('.switch');
const modeIcon = document.querySelector('.mode-label .icon');
const modeIconAlt = document.querySelector('.mode-label .ir_pm');
const main = document.querySelector('main');
closeBtn.addEventListener('click', ()=>{
  header.classList.toggle('close');
  main.classList.toggle('close');
});
searchIcon.addEventListener('click', ()=>{
  header.classList.remove('close');
});
modeSwitch.addEventListener('click', ()=>{
  body.classList.toggle('dark');
  if(modeIcon.classList.contains('fa-sun')){
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
    modeTxt.innerText = "Dark Mode";
    modeIconAlt.innerText = 'dark mode';
  }else if(modeIcon.classList.contains('fa-moon')){
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
    modeTxt.innerText = "Light Mode";
    modeIconAlt.innerText = 'light mode';
  }
})