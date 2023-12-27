let navLinks = document.querySelectorAll('.navbar > ul > li > a');

for (let i = 0; i < navLinks.length; i ++) {
    navLinks[i].addEventListener('click', () => {
        for (let j = 0; j < navLinks.length; j ++) {
            navLinks[j].classList.remove('active-link');
        }
        navLinks[i].classList.add('active-link');
    });
}