let navLinks = document.querySelectorAll('.navbar > ul > li > a');

for (let i = 0; i < navLinks.length; i ++) {
    navLinks[i].addEventListener('click', () => {
        for (let j = 0; j < navLinks.length; j ++) {
            navLinks[j].classList.remove('active-link');
        }
        navLinks[i].classList.add('active-link');
    });
}


let settings = document.querySelector('.settings');
let toggleSettings = document.querySelector('.toggle-settings');

let body = document.querySelector('body');

// toggle switch box
toggleSettings.addEventListener('click', () => {
    settings.classList.toggle('show-settings');
});

// close switch box
body.addEventListener('click', () => {
    settings.classList.remove('show-settings');
});

settings.addEventListener('click', (e) => {
    e.stopPropagation();
});