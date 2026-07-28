//about
const email = 'serirucy@gmail.com';
const aboutCopyBtn = document.querySelector('button.copy-btn');
async function copyFun(txt){
  try{
    await window.navigator.clipboard.writeText(email);
    txt.innerText = "COPIED!";
    setTimeout(()=>{
      txt.innerText = 'COPY!';
    }, 2000);
  } 
  catch (err){
    alert('복사가 실패했어요ㅠㅠ 다시 시도해주세요');
  }
};
aboutCopyBtn.addEventListener('click', function(){
  copyFun(aboutCopyBtn);
});
//slider
$(document).ready(function(){
  $('.uxui-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  });
  $('.clon-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  });
  $('.webapp-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
});
});
$('.miffy-li .fade-gallery').slick({
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.headaway-li .fade-gallery').slick({
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.discord-li .fade-gallery').slick({
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});
//component
const compoSecMenu = document.querySelector('section.component .sec-title ul.menu');
const compoSecMenuLi = document.querySelectorAll('section.component .sec-title ul.menu li button');
const compoTitleH2 = document.querySelector('section.component .sec-con .compo-title h2');
const compoTitleDesc = document.querySelector('section.component .sec-con .compo-title p');
const compoDescArr = [
  'CSS3에 추가된 다양한 기능 중 transform과 transition, animation 등 인터랙티브한 웹 구축에 활용할 수 있는 기능을 구현했습니다',
  'form 태그와 함께 쓰이는 다양한 input 및 select 등의 태그를 연습했습니다',
  '순수 자바스크립트와 jquery의 setTimeout과 setInterval, appendTo, prependTo, 이팩트 매소드 등을 활용해 제작한 히어로 영역 배너 입니다',
  '다양한 형태의 navigation을 연습했습니다'
];
const compoTitleArr = ['CSS3', 'Form', 'Banner', 'Navigation'];
const compoUl = document.querySelector('section.component .sec-con .components ul');
let compoLi = '';
function CompoObj(a, b, c, d, e, f){
  this.group = a;
  this.title = b;
  this.desc = c;
  this.link = d;
  this.img = e;
  this.width = f;
};
CompoObj.prototype.liCreateFn = function(){
  return `<li><div class="thum-box"><img src="${this.img}" alt="${this.title}"></div><div class="info-box"><p class="compo-name">${this.title}</p><p class="compo-desc">${this.desc}</p><a href="${this.link}" class="goto-btn" data-featherlight="iframe"  data-featherlight-iframe-width="${this.width}" data-featherlight-iframe-style="height: 95vh;">보러가기</a></div></li>`;
};
const compoArr = [
  new CompoObj ('CSS3', 'Wheel Loader', 'transform의 rotate와 animation, filter, SVG를 활용해 만든 휠 도형 로더', 'pratical/css3/animation/wheel-loader.html', 'img/wheel.gif', '768'),
  new CompoObj ('CSS3', 'Text Loader', 'transform의 translate와 animation, mix-blend-mode, text-shadow를 활용해 만든 글자 로더', 'pratical/css3/animation/text-loader.html', 'img/txt.gif', '768'),
  new CompoObj ('CSS3', 'Teeniping', 'transform의 skew, translate와 더불어 transition을 사용해 마우스 오버 시 캐릭터가 강조되는 인터랙션', 'pratical/css3/transform/teeniping.html', 'img/compo-img-2.png', '1280'),
  new CompoObj ('Form', 'Checkbox & Radio', '일반 형제 결합자와 인접 형제 결합자를 활용해 선택된 항목에 따라 달라지는 스타일', 'pratical/form/checkbox_radio/checkbox_radio.html', 'img/compo-img-3.png', '768'),
  new CompoObj ('Form', 'Select', '아코디언 메뉴와 같은 커스텀 select 메뉴', 'pratical/form/select/select.html', 'img/compo-img-4.png', '1024'),
  new CompoObj ('Form', 'Text', '검색창과 단답식 질의응답에 쓰일 수 있는 text 타입 input', 'pratical/form/text/text.html', 'img/compo-img-5.png', '768'),
  new CompoObj ('Form', 'Num', '커스텀 버튼을 제작해 조작이 가능하도록 만든 num 타입 input', 'pratical/form/num/number.html', 'img/compo-img-6.png', '1024'),
  new CompoObj ('Form', 'Join Form', 'date, file, radio 등 다양한 타입의 input과 더불어 select, texture, 정규식과 replace 함수 등을 활용해 만든 회원가입 양식', 'pratical/form/join/join.html', 'img/compo-img-7.png', '1280'),
  new CompoObj ('Banner', 'Javascript Slider', '화살표 버튼과 슬라이드 닷을 포함한 무한 슬라이드 되는 형식의 슬라이더', 'pratical/mainbanner/js-slider/js_slideGallery.html', 'img/compo-img-8.png', '1500'),
  new CompoObj ('Banner', 'jQuery Slider', '화살표 버튼과 함께, 현재 슬라이더와 총 슬라이더의 수가 표시되는 슬라이더', 'pratical/mainbanner/jq-slider/jq_slideGallery.html', 'img/compo-img-9.png', '1500'),
  new CompoObj ('Banner', 'Javascript Fade Gallery', '화살표 버튼과 컨트롤러로 재생을 조작할 수 있는 페이드 갤러리', 'pratical/mainbanner/js-fadeGallery/js_fadeGallery.html', 'img/compo-img-10.png', '1500'),
  new CompoObj ('Banner', 'jQuery Fade Gallery', '갤러리의 이미지 닷과 화살표 버튼을 포함한 페이드 갤러리', 'pratical/mainbanner/jq-fadeGallery/jq_fadeGallery.html', 'img/compo-img-11.png', '1500'),
  new CompoObj ('Navigation', 'Dash Board', '간추린 메뉴와 펼친 메뉴로 변경이 가능하고 다크 모드와 라이트 모드를 선택할 수 있는 좌측 고정 네비게이션', 'pratical/navigation/dashboard/dashboard.html', 'img/compo-img-12.png', '1280'),
  new CompoObj ('Navigation', 'CSS Web', 'css만을 활용한 하위 메뉴가 위에서 아래로 슬라이드 되는 해더 네비게시연', 'pratical/navigation/css-header/css-header.html', 'img/compo-img-13.png', '1280'),
  new CompoObj ('Navigation', 'JS Responsive Web', '데스크탑에서는 메뉴에 마우시 오버시 하위 메뉴가 노출되고, 768px 이하 테블릿에서는 메뉴 아이콘 클릭시 우측에서 슬라이드되며 나타나는 반응형 해더', 'pratical/navigation/js-header/js-header.html', 'img/compo-img-14.png', '1280'),
  new CompoObj ('Navigation', 'JQ Mobile', '모바일 화면의 상단과 하단에 고정되어 있는 아이콘과 탭 메뉴와 더불어 메뉴 버튼 클릭시 오른쪽에서 슬라이드 되는 메뉴 속 아코디언 메뉴 ', 'pratical/navigation/jq-header/jq-header.html', 'img/compo-img-15.png', '768')
];
function compoLiCreateFn(num){
  for(let i=0;i<compoArr.length;i++){
    if(compoArr[i].group == compoTitleArr[num]){
      compoLi+=compoArr[i].liCreateFn();
    }
  }
};
compoSecMenu.addEventListener('click', function(e){
  compoSecMenuLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('active');
      compoTitleH2.innerText = compoTitleArr[idx];
      compoTitleDesc.innerText = compoDescArr[idx];
      compoLi='';
      compoLiCreateFn(idx);
      compoUl.innerHTML = compoLi;
    }else{
      el.classList.remove('active');
    }
  });
});
//header
const header = document.querySelector('header');
//scroll event
const aboutSec = document.querySelector('section.about');
const aboutSecTitle = document.querySelector('section.about .sec-title');
const skillsSec = document.querySelector('section.skills');
const skillsSecTitle = document.querySelector('section.skills .sec-title');
const uxuiSec = document.querySelector('section.uxui-pro');
const uxuiSecTitle = document.querySelector('section.uxui-pro .sec-title');
const cloneSec = document.querySelector('section.web-clon-pro');
const cloneSecTitle = document.querySelector('section.web-clon-pro .sec-title');
const webappSec = document.querySelector('section.webapp-pro');
const webappSecTitle = document.querySelector('section.webapp-pro .sec-title');
const componentSec = document.querySelector('section.component');
const componentSecTitle = document.querySelector('section.component .compo-title');
const footerH2 = document.querySelector('footer h2');
console.log(skillsSec.offsetTop)
window.addEventListener('scroll', function(e){
  // console.log(this.scrollY);
  const coverHeight = document.querySelector('section.cover').offsetHeight;
  if(this.scrollY>=coverHeight){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
  if(this.scrollY>=coverHeight/2){
    aboutSecTitle.classList.add('top-to-bottom');
  }else{
    aboutSecTitle.classList.remove('top-to-bottom');
  }
  if(this.scrollY>=skillsSec.offsetTop - coverHeight/2){
    skillsSecTitle.classList.add('top-to-bottom');
  }else{
    skillsSecTitle.classList.remove('top-to-bottom');
  }
  if(this.scrollY>=uxuiSec.offsetTop - coverHeight/2){
    uxuiSecTitle.classList.add('top-to-bottom');
  }else{
    uxuiSecTitle.classList.remove('top-to-bottom');
  }
  if(this.scrollY>=cloneSec.offsetTop - coverHeight/2){
    cloneSecTitle.classList.add('top-to-bottom');
  }else{
    cloneSecTitle.classList.remove('top-to-bottom');
  }
  if(this.scrollY>=webappSec.offsetTop - coverHeight/2){
    webappSecTitle.classList.add('top-to-bottom');
  }else{
    webappSecTitle.classList.remove('top-to-bottom');
  }
  if(this.scrollY>=componentSec.offsetTop - coverHeight/2){
    componentSecTitle.classList.add('right-to-left');
  }else{
    componentSecTitle.classList.remove('right-to-left');
  }
});
//footer
const footerMail = document.querySelector('footer span.mail');
const footerBallon = document.querySelector('footer button.click-ballon');
footerMail.addEventListener('click', function(){
  copyFun(footerBallon);
});