
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top>= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'left'});

const typed = new Typed ('.multiple-text',{
    strings: ['Frontend Developer','Network Engineer','Data Administrator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  responseDiv.innerHTML = "Sending...";

  fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      responseDiv.innerHTML = "Thank you for your message!";
      form.reset();
    } else {
      console.error("Formspree Error:", response.status, response.statusText);
      responseDiv.innerHTML = "Thank you for your message!";
      form.reset(); 
    }
  })
  .catch(error => {
    console.error("Fetch Error:", error);
    responseDiv.innerHTML = "Thank you for your message!"; 
    form.reset();
  });
});
