const accordion = document.getElementsByClassName('contentBx');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    // Toggle the 'active' class on the clicked contentBx element
    this.classList.toggle('active');

    // Get the content element inside the clicked contentBx
    const content = this.querySelector('.content');

    // Toggle the display property of the content based on the 'active' class
    if (this.classList.contains('active')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
}

// To save email
function saveEmail(event)  {
  // function is same as used in html form
  event.preventDefault();
  /* Input type Email Id is used */
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  
  // Save the email to LocalStorage
  localStorage.setItem("user_email", email);
  
  // Redirect to the next page and name of next page
  window.location.href = "child.html";
}

