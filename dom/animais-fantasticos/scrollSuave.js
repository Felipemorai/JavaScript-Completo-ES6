const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    // forma com window.scrollTo()
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    });

    // forma com element.scrollIntoView()
    /* 
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    */

}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});