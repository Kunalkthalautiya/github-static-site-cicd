// Highlight active nav link based on current page URL
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Simple contact form validation (to be used in contact.html)
function validateContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value.trim()) {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (!email.value.trim() || !validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  if (!message.value.trim()) {
    alert("Please enter your message.");
    message.focus();
    return false;
  }

  alert("Thank you for contacting us! We will get back to you soon.");
  document.getElementById("contact-form").reset();
  return true;
}

function validateEmail(email) {
  // Simple regex for email validation
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
