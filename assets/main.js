const button=document.querySelector('.menu-button');
const nav=document.querySelector('#navigation');
const mobile=matchMedia('(max-width:800px)');
function reset(){nav.hidden=mobile.matches;button.setAttribute('aria-expanded',String(!nav.hidden));}
if(button&&nav){reset();mobile.addEventListener('change',reset);button.addEventListener('click',()=>{nav.hidden=!nav.hidden;button.setAttribute('aria-expanded',String(!nav.hidden));});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobile.matches&&!nav.hidden){nav.hidden=true;button.setAttribute('aria-expanded','false');button.focus();}});}
