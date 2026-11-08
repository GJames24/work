(function(){var d=document,h=d.documentElement;h.classList.add('js');
var S=[].slice.call(d.querySelectorAll('.screen')),R=[].slice.call(d.querySelectorAll('.rail a')),b=d.getElementById('bar');
function on(i){R.forEach(function(r,j){r.classList.toggle('on',j==i);r.classList.toggle('done',j<i);if(j==i)r.setAttribute('aria-current','step');else r.removeAttribute('aria-current')});if(b)b.style.width=(100*(i+1)/S.length)+'%'}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');on(S.indexOf(e.target))}})},{rootMargin:'-45% 0px -45% 0px'});S.forEach(function(s){io.observe(s)})}else S.forEach(function(s){s.classList.add('in')});
var T=d.getElementById('tip'),L=null;
function put(e,r){var H=innerHeight,w=e.offsetWidth,q=e.offsetHeight,t=r.bottom+8;if(t+q>H-8)t=r.top-q-8;t=Math.max(8,Math.min(t,H-q-8));e.style.left=scrollX+Math.max(8,Math.min(r.left,innerWidth-w-8))+'px';e.style.top=scrollY+t+'px'}
function tip(e){var t=e.target.closest&&e.target.closest('[data-tip]'),f=t&&t.closest('figure');if(L){L.textContent='';L=null}T.hidden=true;if(!t)return;var m=t.getAttribute('data-tip');if(f){L=f.querySelector('.tipline');if(L)L.textContent=m}else{T.textContent=m;T.hidden=false;put(T,t.getBoundingClientRect())}}
d.addEventListener('mouseover',tip);d.addEventListener('focusin',tip);
d.addEventListener('keydown',function(e){if(e.key=='Escape')T.hidden=true});
})();
