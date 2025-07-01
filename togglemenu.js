function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    document.getElementById("navMenu").classList.remove("show");
  }
});