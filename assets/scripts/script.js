const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menulist-mobile');
const overlay = document.querySelector('.overlay');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menulist-mobile--active');
    overlay.classList.toggle('overlay--active');
}

hamburger.addEventListener('click', handleClick);
