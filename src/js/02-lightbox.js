import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
    .map(({ preview, original, description }) =>
        `<li><a class = 'gallery__item' href = '${original}'>
            <img class = 'gallery__image'
            src = ${preview}
            alt = ${description}
            />
        </a></li>`)
    .join(''); 
gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', clickImage);
function clickImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        event,
        captionSelector: 'img',
        captionsData: 'alt',
        captionDelay: 250,
        });
};