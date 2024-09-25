// JavaScript Document
console.log("hi");

// script.js
let lastScrollTop = 0; // Variabele om de vorige scrollpositie op te slaan
const navbar = document.getElementById("navbar");

// Controleer of de gebruiker de voorkeur heeft ingesteld om beweging te verminderen
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

// Selecteer het video-element
const video = document.querySelector(".homeachtergrondvideo");


//hamburgermenu
const hamMenu = document.querySelector('.hamburgermenu');

const offScreenMenu = document.querySelector('.offscreenmenu');

hamMenu.addEventListener('click', () => { 
  hamMenu.classList.toggle('active'); 
offScreenMenu.classList.toggle('active');
})

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    // De gebruiker is helemaal bovenaan de pagina: maak de navigatiebalk weer transparant
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    navbar.style.color = "white"; // Optioneel: tekstkleur aanpassen
  } else if (scrollTop > lastScrollTop) {
    // De gebruiker scrolt naar beneden: verberg de navigatiebalk
    navbar.style.top = "-80px";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Transparant houden tijdens het verbergen
  } else {
    // De gebruiker scrolt omhoog: toon de navigatiebalk en maak deze wit
    navbar.style.top = "0";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Wit maken bij omhoog scrollen
    navbar.style.color = "black"; // Optioneel: tekstkleur aanpassen
  }
  lastScrollTop = scrollTop; // Update de laatste scrollpositie
});

// Functie die naar het einde van de pagina scrollt
function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

// Event listener voor het toetsenbord
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    scrollToBottom();
  }
});

//voor de reduce motion heb ik gebruik gemaakt van chatgpt. https://chatgpt.com/c/66f4101b-17f4-8007-9424-d3d8470c93fd

// Functie om de autoplay van de video aan te passen op basis van de voorkeur
function handleMotionPreferenceChange() {
  if (prefersReducedMotion.matches) {
    // Gebruiker wil minder beweging, dus autoplay uitschakelen en de video pauzeren
    video.removeAttribute("autoplay");
    video.pause(); // Pauzeer de video als deze al afgespeeld wordt
  } else {
    // Geen voorkeur, dus autoplay aanzetten en video afspelen
    video.setAttribute("autoplay", "autoplay");
    video.play();
  }
}

// Direct de functie aanroepen bij het laden van de pagina
handleMotionPreferenceChange();

// Als de voorkeur verandert tijdens het gebruik, update de video-instellingen
prefersReducedMotion.addEventListener("change", handleMotionPreferenceChange);
