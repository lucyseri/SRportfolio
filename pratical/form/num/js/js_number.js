const customNum = document.querySelectorAll('.cutom-num');
customNum.forEach(num =>{
  const numInput = num.querySelector('.num-input');
  const plusBtn = num.querySelector('.plus');
  const minusBtn = num.querySelector('.minus');
  //input color
  numInput.style.color = numInput.dataset.color;
  //check max & min
  function checkMaxMinFn(){
    const numInputValue = parseInt(numInput.value);
    const numInputMax = parseInt(numInput.max);
    const numInputMin = parseInt(numInput.min);
    if(numInputValue >= numInputMax){
      num.style.height = "96px";
      plusBtn.style.display = "none";
      minusBtn.style.display = "block";
    }else if(numInputValue <= numInputMin){
      num.style.height = "96px";
      plusBtn.style.display = "block";
      minusBtn.style.display = "none";
    }else{
      num.style.height = "128px";
      plusBtn.style.display = "block";
      minusBtn.style.display = "block";
    }
  };
  numInput.addEventListener('input', checkMaxMinFn);
  plusBtn.addEventListener('click', ()=>{
    numInput.stepUp();
    checkMaxMinFn();
  });
  minusBtn.addEventListener('click', ()=>{
    numInput.stepDown();
    checkMaxMinFn();
  });
})