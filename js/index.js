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
const gradientLine = document.querySelector('.gradient');
const gradientHeight = getSumOfHeights(header);
gradientLine.style.height = `${getSumOfHeights(header)}px`;
function getSumOfHeights(element){
  return element.clientHeight + element.nextSibling.nextSibling.clientHeight;
}


        //mobile menu
        const burger = document.querySelector('.burger');
        const crossBurger = 'cross-inner';
        const crossBurgerLines = 'cross__line';
        const mobileLink = 'mobile-link';
        const mobileMenu = document.querySelector('.nav');
        let flagMenuAnimation = false;
        const visibMenu = () => {
            mobileMenu.classList.add('mobile-menu-visible');
        };

        const inVisibMenu = () => {
            mobileMenu.classList.add('mobile-menu-invisible');
            mobileMenu.classList.remove('mobile-menu-visible', 'mobile-menu-animation');
        };

        burger.addEventListener('click', () => {
            if (flagMenuAnimation) {
                mobileMenu.classList.remove('mobile-menu-invisible', 'mobile-menu-animation-back');
                mobileMenu.removeEventListener('animationend', inVisibMenu);
                flagMenuAnimation = false;
            }
            mobileMenu.classList.add('mobile-menu-animation');
            mobileMenu.addEventListener('animationend', visibMenu);
        });

        mobileMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains(crossBurger) || e.target.classList.contains(crossBurgerLines) || e.target.classList.contains(mobileLink)) {
                mobileMenu.classList.add('mobile-menu-animation-back');
                mobileMenu.addEventListener('animationend', inVisibMenu);
                flagMenuAnimation = true;
            }
        });

// href 

function isNodeOrParent(target) {
  let anchor = target;
  if (target.parentNode.classList.contains('scrollTo')) {
      anchor = target.parentNode;
      return anchor
  }
  return anchor;
}

document.addEventListener('click', function(e) {

  if (e.target.classList.contains('scrollTo') || e.target.parentNode.classList.contains('scrollTo')) {
      e.preventDefault();
      const scrollSpeed = 0.7;
      let windowOffSetY = window.pageYOffset;
      let anchorElement = isNodeOrParent(e.target).getAttribute('data-href');
      let toScrollElelement = document.getElementById(anchorElement);
      let topCoordsOftoScrollElelement = toScrollElelement.getBoundingClientRect().top;
      let start = null;
      requestAnimationFrame(step);

      function step(time) {
          if (start === null) start = time;
          let progress = time - start;
          let windowCoordsToScrollY = (topCoordsOftoScrollElelement < 0) ? Math.max(windowOffSetY - progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement) : Math.min(windowOffSetY + progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement);
          window.scrollTo(0, windowCoordsToScrollY);
          if (windowCoordsToScrollY != windowOffSetY + topCoordsOftoScrollElelement) {
              requestAnimationFrame(step);
          }

      }
  }


});