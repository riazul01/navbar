(function () {
    const toggler = document.querySelector('.toggler');
    const navBar = document.querySelector('.navbar');
    const dropdown = document.querySelector('.dropdown');
    const dropdownList = document.querySelector('.dropdown-list');
    const settings = document.querySelector('.settings');
    const body = document.querySelector('body');

    // remove navbar/dropdown while click on body
    body.addEventListener('click', () => {
        toggler.classList.remove('active');
        navBar.classList.remove('active-nav');
        dropdownList.classList.remove('active');
    });

    // toggle bar
    toggler.addEventListener('click', (e) => {
        e.stopPropagation();
        toggler.classList.toggle('active');
        navBar.classList.toggle('active-nav');
        settings.classList.remove('show-settings');
    });

    navBar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    dropdown.addEventListener('click', () => {
        dropdownList.classList.toggle('active');
    });

    dropdownList.addEventListener('click', (e) => {
        e.stopPropagation();
    });
})();



// settings
(function () {
    const settings = document.querySelector('.settings');
    const toggleSettings = document.querySelector('.toggle-settings');
    const toggler = document.querySelector('.toggler');
    const navBar = document.querySelector('.navbar');
    const body = document.querySelector('body');

    // toggle switch box
    toggleSettings.addEventListener('click', () => {
        settings.classList.toggle('show-settings');
        navBar.classList.remove('active-nav');
        toggler.classList.remove('active');
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
    const colorBtns = document.querySelectorAll('.color-btn');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const footerLink = document.querySelector('footer > p > a');
    let prevIndex = 0;

    for (let i = 0; i < colorBtns.length; i ++) {
        colorBtns[i].addEventListener('click', () => {
            for (let j = 0; j < navLinks.length; j ++) {
                navLinks[j].classList.remove(colorBtns[prevIndex].getAttribute('data-color'));
                footerLink.classList.remove(colorBtns[prevIndex].getAttribute('data-color'));
                navLinks[j].classList.add(colorBtns[i].getAttribute('data-color'));
                footerLink.classList.add(colorBtns[i].getAttribute('data-color'));
            }
            prevIndex = i;
        });
    }
})();



// switch theme
(function () {
    const body = document.querySelector('body');
    const darkThemeBtn = document.querySelector('#dark-theme-btn');
    const lightThemeBtn = document.querySelector('#light-theme-btn');

    darkThemeBtn.onclick = () => {
        body.classList.remove('light');
        darkThemeBtn.classList.add('active-theme-btn');
        lightThemeBtn.classList.remove('active-theme-btn');
    }

    lightThemeBtn.onclick = () => {
        body.classList.add('light');
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

        let prevIndex = null;

        const handleSectionView = (index) => {
            activateNavLink(index);
            activateSection(index);
            if (prevIndex !== index) {
                activeAnimation(index);
            }
            prevIndex = index;
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