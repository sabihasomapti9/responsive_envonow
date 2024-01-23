


const container = document.querySelector('.container-h');
const lines = document.querySelectorAll('.line1, .line2');

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






