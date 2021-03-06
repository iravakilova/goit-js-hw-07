import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
    .map(({ preview, original, description }) =>
        `<div class = 'gallery__item'>
            <a class = 'gallery__link' href = '${original}'>
                <img class = 'gallery__image'
                src = ${preview}
                data-source = ${original}
                alt = ${description}
                />
            </a>
        </div>`)
    .join(''); 
gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', clickImage);
function clickImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
        <img src= ${event.target.dataset.source}>
    `)
    instance.show()
};