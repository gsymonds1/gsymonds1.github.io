let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
  currentSlide = index;
}

function changeSlide() {
  showSlide(currentSlide + 1);
}

// Function to start the slideshow and change images every 3 seconds
function startSlideshow() {
  showSlide(0);
  setInterval(changeSlide, 700); // Change the interval to 3000ms (3 seconds)
}

// Add click event listeners to the thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    showSlide(index);
  });
});

// Start the slideshow when the page is loaded
window.onload = startSlideshow;