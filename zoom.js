const zoomies = document.querySelectorAll(".zoom-section");

zoomies.forEach((zoomie) => {
  zoomie.addEventListener("click", function () {
    zoomie.classList.toggle("is-active");
  });
});