// Get the modal and images
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const gallery = document.querySelector(".gallery");

// Function to open the modal
function openModal(imageSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listeners
gallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        openModal(event.target.src);
    }
});

modal.addEventListener("click", closeModal);

// Close modal when the 'x' button is clicked
modal.querySelector(".close").addEventListener("click", closeModal);
