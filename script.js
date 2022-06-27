//burger menu
const headerBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
headerBurger.addEventListener('click', function(){
	headerBurger.classList.toggle('activeBurger');
	menu.classList.toggle('activeBurger');
});