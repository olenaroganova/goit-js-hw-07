import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
});
    
// list.addEventListener('click', handleClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img src="${preview}" alt="${description}"  class="gallery__image" /></a></li>`).join('');
}

// function handleClick(event) {
//     event.preventDefault();
//     if (!event.target.classList.contains('gallery__image')) {
//         return;
//     }
// }


