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
