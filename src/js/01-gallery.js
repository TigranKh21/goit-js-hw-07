import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

let galleryArray = [];

galleryItems.forEach(image => {
  return galleryArray.push(
    `<li class="gallery__item"
      <a class="gallery__link" href="${image.original}">
         <img class="gallery__image"src="${image.preview}"
            data-source="${image.original}"alt="${image.description}"
          />
      </a>
    </li>`
  );
});
galleryEl.insertAdjacentHTML('afterbegin', galleryArray.join(''));
galleryEl.addEventListener('click', onClickImage);

function onClickImage(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" height="720">`
  );
  instance.show();

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}
