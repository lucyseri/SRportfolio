//phone num
const phoneInput = document.querySelector('#user-phone');
//phone num
phoneInput.addEventListener('input', function(e){
  this.value = this.value.replace(/[^0-9.]/g,'');
});
//select custom
const labels = document.querySelectorAll('.select-box label');
const occupationSelect = document.querySelector('#user-occupation');
const regionSelect = document.querySelector('#user-region');
//label prevent deault
labels.forEach((el)=>{
  el.addEventListener('click', function(e){
    e.preventDefault();
  })
});
//occupation select
let occupationTrigger = true;
occupationSelect.addEventListener('click', function(e){
  if(occupationTrigger){
    this.classList.add('arrow-up');
    occupationTrigger = false;
  }else{
    this.classList.remove('arrow-up');
    occupationTrigger = true;
  }
});
//region select
let regionTrigger = true;
regionSelect.addEventListener('click', function(){
  if(regionTrigger){
    this.classList.add('arrow-up');
    regionTrigger = false;
  }else{
    this.classList.remove('arrow-up');
    regionTrigger = true;
  }
});
document.addEventListener('click', function(e){
  if(!occupationTrigger){
    if(e.target !== occupationSelect){
      occupationSelect.classList.remove('arrow-up');
      occupationTrigger = true;
    }
  }
  if(!regionTrigger){
    if(e.target !== regionSelect){
      regionSelect.classList.remove('arrow-up');
      regionTrigger = true;
    }
  }
});
