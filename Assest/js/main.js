/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

/*==== MENU SHOW ====*/
/*validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*====== MENU HIDDEN ======*/
/*validate if constant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav__link, we remove the show-menu from navMenu classList
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  //when scroll > 50 viewport height,add shadow-header else remove shadow-header from header classList
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault(); //allowing for dynamic updates to the page content without a full page reload

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_g0tklje",
      "template_6p3b6i8",
      "#contact-form",
      "prH99_au0OxzghTTQ"
    )
    .then(
      () => {
        /**then(onFulfilled, onRejected) */
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with scrolling class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//     const scrollDown = window.scrollY

//     secitons.forEach(current=>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               sectionsClass = document.querySelector('.nav__menu a[href+=' + sectionId + ']')
//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//             sectionsClass.classList.add('active-Link')
//         }else{
//             sectionsClass.classList.remove('active-Link')
//         }
//     })
// }
// window.addEventListener('scroll',scrollActive);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Previously selected topic(if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true //animation repeat
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: `right` });
sr.reveal(
  `.home__name, .home__info,
           .about__container .section__title-1, .about__info,
           .contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`.projects__card`, { interval: 100 });
