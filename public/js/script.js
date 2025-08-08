/*
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    for (let el of reveals) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    }
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run on load
});
*/

// public/js/script.js
// public/js/script.js
console.log("Script loaded");

// Function to add click handlers to images
function initImageModal() {
  const images = document.querySelectorAll('.images img');
  if (images.length === 0) {
    console.log("No images found yet — retrying...");
    setTimeout(initImageModal, 500); // Retry after 0.5s
    return;
  }

  images.forEach((img) => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.innerHTML = `<img src="${img.src}" alt="Zoomed Image" />`;
      document.body.appendChild(modal);

      modal.addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
  });

  console.log("Image modal listeners added");
}

// Run the function right away; if images not yet loaded, it retries
initImageModal();
