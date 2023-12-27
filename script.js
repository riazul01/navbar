// settings
(function () {
    const settings = document.querySelector('.settings');
    const toggleSettings = document.querySelector('.toggle-settings');

    const body = document.querySelector('body');

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
})();



// switch color
(function () {
    const colorLinks = document.querySelectorAll('.color-link');
    const colorBtns = document.querySelectorAll('.color-btn');

    for (let i = 0; i < colorBtns.length; i ++) {
        colorBtns[i].addEventListener('click', () => {
            for (let j = 0; j < colorLinks.length; j ++) {
                colorLinks[j].setAttribute('disabled', true);
                if (colorBtns[i].getAttribute('data-color') === colorLinks[j].getAttribute('data-color')) {
                    colorLinks[j].removeAttribute('disabled');
                }
            }
        });
    }
})();



// switch theme
(function () {
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
})();



// switch views
(function () {
    const sectionViewBtn = document.querySelector('#section-view-btn');
    const scrollViewBtn = document.querySelector('#scroll-view-btn');

    const sections = document.querySelectorAll('section');
    const sectionsWrapper = document.querySelector('.sections-wrapper');
    const navLinks = document.querySelectorAll('.nav-items > li > a');

    const animations = [
        'animate__bounce', 
        'animate__flash',
        'animate__pulse', 
        'animate__rubberBand',
        'animate__shakeX', 
        'animate__shakeY',
        'animate__headShake', 
        'animate__swing',
        'animate__tada', 
        'animate__wobble',
        'animate__jello', 
        'animate__heartBeat',

        'animate__backInDown', 
        'animate__backInLeft',
        'animate__backInRight', 
        'animate__backInUp',

        'animate__bounceIn', 
        'animate__bounceInDown', 
        'animate__bounceInLeft', 
        'animate__bounceInRight', 
        'animate__bounceInUp', 

        'animate__fadeIn',
        'animate__fadeInDown', 
        'animate__fadeInDownBig',
        'animate__fadeInLeft', 
        'animate__fadeInLeftBig',
        'animate__fadeInRight', 
        'animate__fadeInRightBig',
        'animate__fadeInUp', 
        'animate__fadeInUpBig',
        'animate__fadeInTopLeft', 
        'animate__fadeInTopRight',
        'animate__fadeInBottomLeft', 
        'animate__fadeInBottomRight',

        'animate__flip', 
        'animate__flipInX', 
        'animate__flipInY',

        'animate__lightSpeedInRight', 
        'animate__lightSpeedInLeft',

        'animate__rotateIn', 
        'animate__rotateInDownLeft',
        'animate__rotateInDownRight', 
        'animate__rotateInUpLeft',
        'animate__rotateInUpRight', 

        'animate__jackInTheBox',
        'animate__rollIn', 

        'animate__zoomIn', 
        'animate__zoomInDown',
        'animate__zoomInLeft', 
        'animate__zoomInRight',
        'animate__zoomInUp', 

        'animate__slideInDown',
        'animate__slideInLeft', 
        'animate__slideInRight',
        'animate__slideInUp'
    ];



    // ## section view logic ##
    const switchToSectionView = () => {

        sectionsWrapper.classList.add('active-section-view');

        // activate current nav link
        const activateNavLink = (index) => {
            for (let i = 0; i < navLinks.length; i ++) {
                navLinks[i].classList.remove('active-link');
            }
            navLinks[index].classList.add('active-link');
        }

        // activate selected section
        const activateSection = (index) => {
            for (let i = 0; i < sections.length; i ++) {
                sections[i].classList.remove('active-section');
            }
            
            sections[index].classList.add('active-section');
        }

        // animate current section
        const activeAnimation = (index) => {
            for (let i = 0; i < sections.length; i ++) {
                sections[i].classList.add('animate__animated');

                // remove previous animation
                for (let j = 0; j < animations.length; j ++) {
                    sections[i].classList.remove(animations[j]);
                }
            }

            // add animation
            const animIndex = Math.floor(Math.random() * animations.length);
            sections[index].classList.add(animations[animIndex]);
        }

        const handleSectionView = (index) => {
            activateNavLink(index);
            activateSection(index);
            activeAnimation(index);
        }

        // control navigation
        const handleNavigation = () => {
            for (let i = 0; i < navLinks.length; i ++) {
                navLinks[i].onclick = () => {
                    handleSectionView(i);
                };
            }
        }

        const resetSectionView = () => {
            handleSectionView(0);
            window.onscroll = () => {return null};
        }

        resetSectionView();
        handleNavigation();
    }



    // ## scroll view logic ##
    const switchToScrollView = () => {

        sectionsWrapper.classList.remove('active-section-view');

        const resetNavLinks = () => {
            for (let i = 0; i < navLinks.length; i ++) {
                navLinks[i].classList.remove('active-link');
            }
            navLinks[0].classList.add('active-link');
        }

        const removeAnimation = () => {
            for (let i = 0; i < sections.length; i ++) {
                sections[i].classList.remove('animate__animated');

                // remove added animation
                for (let j = 0; j < animations.length; j ++) {
                    sections[i].classList.remove(animations[j]);
                }
            }
        }

        const removeClickEvents = () => {
            for (let i = 0; i < navLinks.length; i ++) {
                navLinks[i].onclick = () => {return null};
            }
        }

        const activateAllSections = () => {
            for (let i = 0; i < sections.length; i ++) {
                sections[i].classList.add('active-section');
            }
        }

        // scrollspy
        const activateScrollSpy = () => {
            window.onscroll = () => {
                const scrollHeight = window.pageYOffset;

                for (let i = 0; i < sections.length; i++) {
                    if (sections[i].offsetTop / 1.1 <= scrollHeight) {
                        for (let j = 0; j < navLinks.length; j++) {
                            navLinks[j].classList.remove('active-link');
                        }
                        navLinks[i].classList.add('active-link');
                    }
                }
            }
        }

        resetNavLinks();
        removeAnimation();
        removeClickEvents();
        activateAllSections();
        activateScrollSpy();
    }

    // initial logic
    if (sectionsWrapper.getAttribute('data-view') === 'section-view') {
        switchToSectionView();
    } else {
        switchToScrollView();
    }

    // switch to section view
    sectionViewBtn.onclick = () => {
        if (sectionsWrapper.getAttribute('data-view') === 'section-view') {
            return null;
        } else {
            sectionsWrapper.setAttribute('data-view', 'section-view');
            scrollViewBtn.classList.remove('active-view-btn');
            sectionViewBtn.classList.add('active-view-btn');
            switchToSectionView();
        }
    }

    // switch to scroll view
    scrollViewBtn.onclick = () => {
        if (sectionsWrapper.getAttribute('data-view') === 'scroll-view') {
            return null;
        } else {
            sectionsWrapper.setAttribute('data-view', 'scroll-view');
            sectionViewBtn.classList.remove('active-view-btn');
            scrollViewBtn.classList.add('active-view-btn');
            switchToScrollView();
        }
    }
})();