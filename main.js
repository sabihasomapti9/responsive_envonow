
const emailInput = document.getElementById("email");
const subscribeButton = document.getElementById("subscribe-button");

subscribeButton.addEventListener("click", (event) => {
  const email = emailInput.value;
  
  if (!validateEmail(email)) {
    event.preventDefault(); // Prevent form submission
    // Display error message
  } else {
    // Submit form or handle subscription logic
  }
});


document.getElementById("subscribe-form").addEventListener("submit", (event) => {
  event.preventDefault();

  
});



const email = emailInput.value;

if (!validateEmail(email)) {
  // Display error message
} else {
  // Proceed with subscription
}








