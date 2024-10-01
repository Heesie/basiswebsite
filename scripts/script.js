// JavaScript Document
console.log("hi");

// script.js
const navbar = document.getElementById("navbar");

// Controleer of de gebruiker de voorkeur heeft ingesteld om beweging te verminderen
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

// Selecteer het video-element
const video = document.querySelector(".homeachtergrondvideo");

//hamburgermenu gemaakt met tutorial: https://www.youtube.com/watch?v=aNDqzlAKmZc&ab_channel=Treehouse
const hamMenu = document.querySelector(".hamburgermenu");
const offScreenMenu = document.querySelector(".offscreenmenu");
const hamburger = document.querySelector(".hamburger");

let lastScrollTop = 0; // Variabele om de vorige scrollpositie op te slaan

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  hamburger.classList.toggle("active"); // Toegevoegd om het kruisje te laten zien
});

//function die ervoor zorgt dat de navigatiebalk van kleur verandered en verschijn of tevoorschijn komt
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    // Dzodra de gebruiker bovenaan de pagina is word de navigatiebalk transparant
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    navbar.style.color = "white"; // zorgt ervor dat de svg ook van kleur veranderen naar wit
  } else if (scrollTop > lastScrollTop) {
    // zodra de gebruiker naar beneden scrollt verdwijnd de navigatiebalk
    navbar.style.top = "-80px";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Transparant houden tijdens het verbergen
  } else {
    // Zodra de gebruiker omhoog scrollt word de navigatiebalk weer wit
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

// Event listener voor het toetsenbord: https://chatgpt.com/share/66fbbca8-bb5c-8007-8bf1-38c787783013
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
