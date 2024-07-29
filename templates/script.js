console.log("hello world")
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
  
    // Function to fetch images from the server
    async function fetchImages() {
      try {
        const response = await fetch('/images');
        const imageUrls = await response.json();
  
        // Clear existing images in the gallery
        gallery.innerHTML = '';
  
        // Create image elements and append them to the gallery
        imageUrls.forEach(url => {
          const img = document.createElement('img');
          img.src = url;
          img.alt = 'Gallery Image';
          img.classList.add('gallery-item'); // Optional: add class for styling
          gallery.appendChild(img);
        });
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  
    // Fetch images when the page loads
    fetchImages();
  });
  