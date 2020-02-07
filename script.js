const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

btnLogin.addEventListener('click', e => { 
  e.preventDefault();
  form.classList.add("form-hide");
});
form.addEventListener('animationstart', e => {
  if(e.animationName === 'down'){
    document.querySelector("body").style.overflow = "hidden";
  }
});
form.addEventListener("animationend",  e => {
  if(e.animationName === 'down'){
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});