const subscribeButton = document.querySelector('.subscribe-button');
const emailInput = document.querySelector('.email-input');

subscribeButton.addEventListener('click', () => {
  const email = emailInput.value.trim(); // Trim whitespace

  // Validate email (consider using a regular expression or library)
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Save email using your preferred method (e.g., localStorage, server-side)
  localStorage.setItem('subscribedEmail', email);
  console.log('Email saved:', email);

  // Additional actions (e.g., display a success message, clear the input field)
  emailInput.value = '';
  alert('You have successfully subscribed!');
});

// Example email validation function (replace with a robust validation method)
function isValidEmail(email) {
  // Simple validation, consider using a more comprehensive regex or library
  return email.includes('@') && email.includes('.');
}
