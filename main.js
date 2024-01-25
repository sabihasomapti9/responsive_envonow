
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



const container = document.querySelector('.container-h');
const lines = document.querySelectorAll('.line1');

function adjustLayout() {
  if (window.innerWidth >= 768) {
    container.style.flexDirection = 'row';
    lines.forEach(line => line.style.width = '50%');
  } else {
    container.style.flexDirection = 'column';
    lines.forEach(line => line.style.width = 'auto');
  }
}

window.addEventListener('resize', adjustLayout);
adjustLayout(); // Call initially to set styles








