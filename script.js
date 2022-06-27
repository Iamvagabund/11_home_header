//burger menu
const headerBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');

const toggleMenu = () => {
  headerBurger.classList.toggle('activeBurger');
  menu.classList.toggle('activeBurger');
};

headerBurger.addEventListener('click', function(){
  toggleMenu();
});

menu.addEventListener('click', (e) => {
  if(e.target === menu) {
    toggleMenu();
  }
});