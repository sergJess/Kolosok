// nav
const navigation =  document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
navigation.addEventListener('mouseover',(e)=>{
  if(e.target.classList.contains('nav__link')){
  for(let i=0, length = navLinks.length; i<length;i++){
    navLinks[i].classList.remove('nav__link_active');
    navLinks[i].parentNode.classList.remove('nav__list_active');
  }
  e.target.classList.add('nav__link_active');
  e.target.parentNode.classList.add('nav__list_active');
  }
});

//gradient

const header = document.querySelector('.header');
const introduce = document.querySelector('.introduce');
const gradientLine = document.querySelector('.gradient-line');
const gradientHeight = getSumOfHeights(header, introduce);
gradientLine.style.height = `${getSumOfHeights(header, introduce)}px`;
function getSumOfHeights(element1, element2){
  return element1.clientHeight + element2.clientHeight;
}

console.log(gradientHeight);