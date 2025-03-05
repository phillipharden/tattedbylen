document.getElementById("currentYear").textContent = new Date().getFullYear();


// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');

// Create a lightbox container dynamically
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
lightbox.style.display = 'none'; // Initially hide the lightbox
document.body.appendChild(lightbox);

// Add event listeners to each image
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show the lightbox
        const img = document.createElement('img'); // Create an img element
        img.src = image.src; // Set the source to the clicked image
        img.classList.add('lightbox-img');
        lightbox.innerHTML = ''; // Clear any existing content
        lightbox.appendChild(img); // Add the image to the lightbox
    });
});

// Hide the lightbox when clicked
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});



const headerTexts = ["Your Story.", "Your Ink. ", "Tatted By Len."];

let currentIndex = 0;
const headerElement = document.getElementById("rotating-header");

function rotateHeaderText() {
  // Fade out the current text
  headerElement.style.opacity = 0;

  // Wait for the fade-out to complete before changing text
  setTimeout(() => {
    // Change the text
    headerElement.textContent = headerTexts[currentIndex];

    // Update index for next text
    currentIndex = (currentIndex + 1) % headerTexts.length;

    // Fade in the new text
    headerElement.style.opacity = 1;
  }, 1000); // Match the duration of the fade-out transition
}

// Start rotation and repeat every 4 seconds
rotateHeaderText();
setInterval(rotateHeaderText, 2500);




// Get references to elements
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const heroSection = document.getElementById("hero-section");

// Show/Hide the button on scroll
window.addEventListener("scroll", () => {
    const heroSectionBottom = heroSection.offsetTop + heroSection.offsetHeight;
    if (window.scrollY > heroSectionBottom) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.style.opacity = "1";
    } else {
        scrollToTopBtn.style.opacity = "0";
        setTimeout(() => {
            scrollToTopBtn.style.display = "none";
        }, 300); // Match the duration of the opacity transition
    }
});

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
