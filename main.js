
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




window.addEventListener('resize', adjustLayout);
adjustLayout(); // Call initially to set styles

window.addEventListener('resize', function() {
  const logo = document.querySelector('.logo');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 720) {
    logo.style.width = '100%';
  } else {
    logo.style.width = '80%'; // Adjust to desired behavior on larger screens
  }
});





const subscribeButton1 = document.querySelector('.subscribe-button1');
const emailInput1 = document.querySelector('.email-input1');

subscribeButton1.addEventListener('click', () => {
  const email = emailInput1.value.trim(); // Trim whitespace

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

