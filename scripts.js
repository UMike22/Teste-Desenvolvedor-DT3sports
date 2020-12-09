const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
const burger = document.querySelector('.burger')
const overlay = document.querySelector('.overlay')
const nav = document.querySelector('.HomeList')

const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('HomeList-active')
    })
    burger.addEventListener('click', () => {
        overlay.classList.toggle('overlay-active')
    })
}

navSlide()

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  /* FUNÇÃO  QUE ANIMA OS ELEMENTOS DO SECTION AO SCROLL */
  
function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        }
        else{
            element.classList.remove(animationClass)
        }
        
    })
}
    animeScroll()
if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll()
}, 200))
}

// FUNÇÃO QUE DEIXA O SCROLL COM LINK INTERNO SUAVE //

const menuItems = document.querySelectorAll('a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click' , scrollToIdOnClick)
})

function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target) - 50
    
    
    ScrollToPosition(to)
}
function ScrollToPosition(to){
    smoothScrollTo(0, to , 900)
}

function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return  document.querySelector(id).offsetTop
}
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };