document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the email from LocalStorage
    const email = localStorage.getItem("user_email");
  
    const displayEmailElement = document.getElementById("displayEmail"); // Id of child html <p> where email is display
    if (email) {
      displayEmailElement.textContent = email;
    } else {
      displayEmailElement.textContent = "Email not available.";
    }
  });
  