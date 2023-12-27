// navbar
let navLinks = document.querySelectorAll('.navbar > ul > li > a');

for (let i = 0; i < navLinks.length; i ++) {
    navLinks[i].addEventListener('click', () => {
        for (let j = 0; j < navLinks.length; j ++) {
            navLinks[j].classList.remove('active-link');
        }
        navLinks[i].classList.add('active-link');
    });
}

// settings
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


// color switch
let colorLinks = document.querySelectorAll('.color-link');
let colorBtns = document.querySelectorAll('.color-btn');

for (let i = 0; i < colorBtns.length; i ++) {
    colorBtns[i].addEventListener('click', () => {
        console.log(colorBtns[i].getAttribute('data-color'));
        for (let j = 0; j < colorLinks.length; j ++) {
            colorLinks[j].setAttribute('disabled', true);
            if (colorBtns[i].getAttribute('data-color') === colorLinks[j].getAttribute('data-color')) {
                colorLinks[j].removeAttribute('disabled');
            }
        }
    });
}


// themes
const lightTheme = document.querySelector('#light-theme');
const darkThemeBtn = document.querySelector('#dark-theme-btn');
const lightThemeBtn = document.querySelector('#light-theme-btn');

darkThemeBtn.onclick = () => {
    lightTheme.setAttribute('disabled', true);
    darkThemeBtn.classList.add('active-theme-btn');
    lightThemeBtn.classList.remove('active-theme-btn');
}

lightThemeBtn.onclick = () => {
    lightTheme.removeAttribute('disabled');
    darkThemeBtn.classList.remove('active-theme-btn');
    lightThemeBtn.classList.add('active-theme-btn');
}