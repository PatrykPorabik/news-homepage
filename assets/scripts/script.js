const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menulist');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menulist--active');
}

hamburger.addEventListener('click', handleClick);
