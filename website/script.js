// When the "Get Started" button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".hero button");

  button.addEventListener("click", () => {
    alert("Thank you for your interest! We’ll contact you soon.");
    console.log("Get Started button clicked");
  });
});
