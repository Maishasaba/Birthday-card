const heart = document.getElementById("openModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("modalOverlay");
const images = document.querySelectorAll(".modal-image");
const message = document.querySelector(".modal-message");

let currentIndex = 0;

heart.addEventListener("click", () => {
  modal.classList.add("active");
  startSlideshow();
});
// Close modal when clicking outside the card
overlay.addEventListener("click", (e) => {
    // Make sure the click is not on the card itself
    if (e.target === overlay) {
      modal.classList.remove("active");
    }
  });
function startSlideshow() {
    images.forEach(img => img.classList.remove("active"));
    message.classList.remove("show");
  
    currentIndex = 0;
    images[currentIndex].classList.add("active");
  
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        // hide current image
        images[currentIndex].classList.remove("active");
        currentIndex++;
        // show next image
        images[currentIndex].classList.add("active");
      } else {
        // last image stays visible
        clearInterval(interval);
        showMessage();
      }
    }, 2000); // delay between images
  }
  
  function showMessage() {
    message.classList.add("show");
  }
  