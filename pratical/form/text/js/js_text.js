const input = document.querySelector('.search-box input');
const tagBoxUl = document.querySelector('.tag-con .tag-box ul');
const deleteAllBtn = document.querySelector('.tag-con .delete-btn');
let tags = [];
input.addEventListener('keyup', (e)=>{
  if(e.keyCode == 13){
    let tag = e.target.value.trim();
    if(tag.length < 1 || tags.includes(tag)){
      e.target.value = "";
      return;
    }
    let index = tags.push(tag);
    let tagItem = document.createElement('li');
    let deleteBtn = document.createElement('span');
    tagItem.textContent = tag;
    tagItem.appendChild(deleteBtn);
    tagBoxUl.appendChild(tagItem);
    e.target.value = "";
    deleteBtn.addEventListener('click', ()=>{
      tagBoxUl.removeChild(tagItem);
      let idx = tags.indexOf(tag);
      tags.splice(idx);
    });
  }else{
    return;
  }
});
deleteAllBtn.addEventListener('click', function(){
  tagBoxUl.replaceChildren();
  tags.splice(0);
});