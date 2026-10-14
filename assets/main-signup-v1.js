const button=document.querySelector('.menu-button');
const nav=document.querySelector('#navigation');
const mobile=matchMedia('(max-width:800px)');
function reset(){nav.hidden=mobile.matches;button.setAttribute('aria-expanded',String(!nav.hidden));}
if(button&&nav){reset();mobile.addEventListener('change',reset);button.addEventListener('click',()=>{nav.hidden=!nav.hidden;button.setAttribute('aria-expanded',String(!nav.hidden));});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobile.matches&&!nav.hidden){nav.hidden=true;button.setAttribute('aria-expanded','false');button.focus();}});}

const signup=document.querySelector('.journal-signup');
if(signup){
 const choices=[...signup.querySelectorAll('input[type=checkbox]')];
 const error=signup.querySelector('#signup-choice-error');
 signup.addEventListener('submit',event=>{
  if(!choices.some(input=>input.checked)){event.preventDefault();event.stopImmediatePropagation();error.hidden=false;choices[0].focus();}
 },true);
 choices.forEach(input=>input.addEventListener('change',()=>{error.hidden=true;}));
 const script=document.querySelector('#kit-signup-script');
 script.addEventListener('load',()=>{signup.querySelector('button[type=submit]').disabled=false;});
 script.addEventListener('error',()=>{error.textContent='The signup service could not load. Please refresh the page or try again later.';error.hidden=false;signup.querySelector('button[type=submit]').disabled=true;});
}
