const toggleMenu = () => {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
    const isOpen = navList.classList.contains('active');
    document.querySelector('.burger-menu-icon').src = `img/burger_${isOpen ? 'open' : 'close'}.svg`;
};

const closeMenu = () => {
    const navList = document.querySelector('.nav-list');
    navList.classList.remove('active');
    document.querySelector('.burger-menu-icon').src = 'img/burger_close.svg';
};

document.addEventListener('click', (event) => {
    const navList = document.querySelector('.nav-list');
    const burgerMenu = document.querySelector('.burger-menu');
    if (!navList.contains(event.target) && !burgerMenu.contains(event.target)) closeMenu();
});

document.querySelectorAll('.nav-item a').forEach(item => item.addEventListener('click', closeMenu));