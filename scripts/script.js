// JavaScript Document
console.log("hi");


// script.js
let lastScrollTop = 0; // Variabele om de vorige scrollpositie op te slaan
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
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
      document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') { 
              scrollToBottom();
          }
      });

