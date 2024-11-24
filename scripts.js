function toggleNav() {
    const menu = document.querySelector('#navbar-menu ul');
    menu.classList.toggle('active'); 
}



let darkmode =localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode  = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')

}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
} )



document.addEventListener('DOMContentLoaded', function() {
    new TypeIt("#typewriter", {
        strings: ["Hello, I am Sarah Dapaah"],
        speed: 100,
        waitUntilVisible: true,
        cursor: false,
        afterComplete: function(instance) {
            const githubIcon = document.querySelector('.github-icon');
            const linkedinIcon = document.querySelector('.linkedin-icon');
            if (githubIcon) {
                githubIcon.style.display = 'inline'; 
                githubIcon.addEventListener('click', function() {
                    window.open('https://github.com/Saretta23', '_blank');
                });
            }
            if (linkedinIcon) {
                linkedinIcon.style.display = 'inline'; 
                linkedinIcon.addEventListener('click', function() {
                    window.open('https://www.linkedin.com/in/sarah-dapaah', '_blank');
                });
            }
        }
    }).go();
  });



const bg = document.getElementById("bg");
const bg1 = document.getElementById("bg-1");
const bg2 = document.getElementById("bg-2");
const bg3 = document.getElementById("bg-3");
const typeWriter = document.getElementById("typewriter");

window.addEventListener('scroll', function() {
  const value = window.scrollY;

 
  bg.style.transform = `translateY(${value * 0.5}px)`; 
  bg1.style.transform = `translateX(${value * 0.5}px)`; 
  bg2.style.transform = `translateY(${value * 0.15}px)`; 
  bg3.style.transform = `translateY(${value * 0.15}px)`; 


  typeWriter.style.transform = `translateY(${value * 1}px)`; 
});



  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const sections = ['about', 'skills', 'projects', 'contact'];
    const iconsContainer = document.getElementById("icons-container");
  
    window.addEventListener("scroll", function() {
      let sectionInView = false;

      sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      const aboutSectionTop = aboutSection.getBoundingClientRect().top;
      const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
  

      if (SectionTop <= windowHeight && aboutSectionBottom >= 0) {
        sectionInView = true;
      }
    });

      if (sectionInView) {
        iconsContainer.style.display = "block";
      } else {
        iconsContainer.style.display = "none";
      } 
    });
  });
  