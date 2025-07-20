  function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  // Optional: close on outside click
  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      closeModal();
    }
  };

