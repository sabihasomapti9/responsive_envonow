const subscribeForm = document.getElementById('subscribeForm');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  // Send email data to your server or email service
  // ... (Replace with your specific code for sending data)

  // Clear form fields and display a success message
  subscribeForm.reset();
  alert('Thank you for subscribing!');
});
