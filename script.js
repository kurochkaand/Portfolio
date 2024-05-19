document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple form validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  // Here you can handle the form submission, e.g., send data to your server
  alert("Thank you for contacting me, " + name + "!");

  // Reset the form
  this.reset();
});
