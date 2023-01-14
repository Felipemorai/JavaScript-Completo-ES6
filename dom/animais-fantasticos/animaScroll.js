const sections = document.querySelectorAll('.js-scroll');

if(sections.length) {
    const halfWindow = window.innerHeight * 0.52;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - halfWindow;
            if(isSectionVisible <= 0) {
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
}