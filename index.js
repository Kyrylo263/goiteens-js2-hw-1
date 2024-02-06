import {galleryItems} from "./app.js";

const gallery = document.querySelector('.js-gallery');
const modalImage = document.querySelector('.lightbox_image');
const lighboxOverlay = document.querySelector('.lightbox_overlay');

galleryItems.forEach((item) => {
    gallery.insertAdjacentHTML("beforeend", `<li class="gallery_item">
  <a class="gallery_link" href="${item.original}">
    <img class="gallery_image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
  </a>
</li>`);
});

gallery.addEventListener("click", imageChooser);
lighboxOverlay.addEventListener("click", (event) => {
    if (event.target === lighboxOverlay) {
        closeModal()
    };
});
document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
        closeModal();
    };
});

function imageChooser(event) {
    if (event.target !== gallery) {
        event.preventDefault()
        let clickedImg = event.target;
        modalImage.src = clickedImg.src;
        modalImage.alt = clickedImg.alt;
        document.body.classList.add("show-modal");
    };
};

function closeModal() {
    document.body.classList.remove("show-modal");
};