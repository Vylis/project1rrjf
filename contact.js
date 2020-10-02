/* CONTACT FOOTER */

const message = "Votre message est envoyé !";
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
