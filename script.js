// menu icons navigation
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scrolling sections active links
const sections = document.querySelectorAll('section');
const  navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id +']').classList.add('active');
            });
        }
    });

    // sticky navigator
    const header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

    

   //remove menu icon nav when click
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// theming
const darModeIcon = document.querySelector('darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

}


