const section = document.querySelector('section');
const select = document.querySelector('select');
const options = document.querySelectorAll('option');
const arrow = document.querySelector('.arrow');
let trigger = true;
//select Ul, select Li 
function newOptionfn(){
  if(trigger){
    arrow.style.transform = "translateY(-50%) scaleY(-1)";
    const selectUl = document.createElement('ul');
    section.appendChild(selectUl);
    options.forEach((el, idx)=>{
      const selectUlLi = document.createElement('li');
      selectUlLi.textContent = el.textContent;
      selectUl.appendChild(selectUlLi);
      selectUlLi.addEventListener('click', (e)=>{
        trigger = true;
        if(e.target.textContent == el.textContent){
          el.selected = true;
        }else{
          el.selected = false;
        }
        selectUl.remove();
        arrow.style.transform = "translateY(-50%)";
      });
    });
    trigger = false;
  }else{
    arrow.style.transform = "translateY(-50%)";
    section.lastChild.remove();
    trigger = true;
  }
};
select.addEventListener('mousedown', (e)=>{
  e.preventDefault();
  newOptionfn();
});
arrow.addEventListener('click', ()=>{
  newOptionfn();
});
document.addEventListener('click', function(e){
  if(e.target !== select && e.target !== arrow.firstElementChild){
    if(trigger == 0){
      arrow.style.transform = "translateY(-50%)";
      section.lastChild.remove();
      trigger = true;
      return
    }
  }
});