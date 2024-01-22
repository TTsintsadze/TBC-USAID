document.addEventListener("DOMContentLoaded", () => {
    const pageHeader = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const { scrollY, scrollTop } = document.documentElement;
        const isPageScrolled = scrollY || scrollTop > 0;
        pageHeader.classList.toggle("scrolled", isPageScrolled);
    });
});

const accordionItems = document.querySelectorAll(".info-accordion-item");

accordionItems.forEach(item => {
    const itemHeader = item.querySelector('.info-accordion-header');

    itemHeader.addEventListener("click", () => {
        const openAccordionItem = document.querySelector(".accordion-open");

        if (openAccordionItem && openAccordionItem !== item) {
            toggle(openAccordionItem);
        }

        toggle(item);

        // Scroll to the opened item for a smooth experience
        if (item.classList.contains("accordion-open")) {
            item.scrollIntoView({ behavior: "smooth" });
        }
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
