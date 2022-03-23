const navSlide = () => {
    const body = document.querySelector('body');
     const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-Links');
    const navLinks = document.querySelectorAll('.nav-Links li');
   
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        document.body.classList.toggle('lock-scroll');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;     
            }
           
           
        });
        
        burger.classList.toggle('toggle');
    });

    
}

navSlide();