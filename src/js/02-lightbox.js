import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const imageArray = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}"
            alt="${description}"
          />
      </a>
    </li>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', imageArray);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
