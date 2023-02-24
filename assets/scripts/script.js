const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    overlay.classList.toggle('overlay--active');
    menu.classList.toggle('menu--active');
}

hamburger.addEventListener('click', handleClick);
