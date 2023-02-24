const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menulist-mobile');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menulist-mobile--active');
}

hamburger.addEventListener('click', handleClick);
