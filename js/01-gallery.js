import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const list = document.querySelector('.gallery');
let instance;

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener('click', handleClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image" /></a></li>`).join('');
}

function handleClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const largeImg = event.target.dataset.source;
    const description = event.target.alt;
    instance = basicLightbox.create(`<img src="${largeImg}" alt="${description}">`);
    instance.show();
    window.addEventListener('keyup', closeModal)
    
}

function closeModal(event) {
    if (event.key === "Escape" && instance) {
        instance.close();
        window.removeEventListener('keyup', closeModal);
    }
}