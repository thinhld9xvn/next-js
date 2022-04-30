import { gsap } from "gsap"; 

export function setupPreloader() {

  const loader = typeof(window) !== 'undefined' ? document.getElementById('loader') : null;

  gsap.to('.loading .txt', .4, {autoAlpha: 1, y:0});
  gsap.to('.progress', .5, {autoAlpha: 1, delay:.4});
  gsap.to('.bar-loading', 0.7, {width: '100%', delay:1 });

  gsap.to('.loading', 0.7, {y:-100, autoAlpha:0, delay:1.7 });
  gsap.to('#loader', 3, {y:-3000, delay:2, ease:'easeOutExpo' } );
  //gsap.from('.hero', 1, {y:100, delay:2, ease:'easeOutExpo' } );
  
  setTimeout(function(){ typeof(window) !== 'undefined' && window.scrollTo(0, 0) }, 2000);
  setTimeout(function(){ loader && loader.remove() }, 3000);  

}