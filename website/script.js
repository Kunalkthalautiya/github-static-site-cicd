document.addEventListener("DOMContentLoaded", () => {
  const getStartedBtn = document.getElementById("getStartedBtn");
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      alert("Thank you for getting started! Learn more on our Services page.");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMessage.style.color = "green";
        formMessage.textContent = `Thank you, ${name}! We'll contact you soon.`;
        contactForm.reset();
      } else {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all fields.";
      }
    });
  }
});
