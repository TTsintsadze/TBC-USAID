document.addEventListener("DOMContentLoaded", () => {
    const pageHeader = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const { scrollY, scrollTop } = document.documentElement;
        const isPageScrolled = scrollY || scrollTop > 0;
        pageHeader.classList.toggle("scrolled", isPageScrolled);
    });
});

const items = document.querySelectorAll(".info-accordion-item");

items.forEach(item => {
    const header = item.querySelector('.info-accordion-header');

    header.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        if (openItem && openItem !== item) {
            toggle(openItem);
        }

        toggle(item);
    });
});

const toggle = (item) => {
    const content = item.querySelector('.info-accordion-content');
    const isOpen = item.classList.toggle("accordion-open");

    if (isOpen) {
        content.style.height = `${content.scrollHeight}px`;
    } else {
        content.removeAttribute("style");
    }
};
