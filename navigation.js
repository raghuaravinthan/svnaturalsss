document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    // Add the animation class
    card.classList.add('animate');

    // Wait for the animation to finish (300ms) before navigating
    setTimeout(() => {
      const href = card.getAttribute('data-href');
      window.location.href = href;
    }, 300);
  });   
});
