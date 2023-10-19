import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

let galleryArray = [];

galleryItems.forEach(({ original, preview, description }) => {
  return galleryArray.push(
    `<li class="gallery__item"
      <a class="gallery__link" href="${original}">
         <img class="gallery__image"src="${preview}"
            data-source="${original}"alt="${description}"
          />
      </a>
    </li>`
  );
});
galleryEl.insertAdjacentHTML('afterbegin', galleryArray.join(''));
galleryEl.addEventListener('click', onClickImage);

function onClickImage(event) {
  event.preventDefault();
  if (event.target.nodeName != 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" height="720">`
  );
  instance.show();

  function onEscByttonClick(event) {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onEscByttonClick);
      console.log('event.key', event.key);
    }
  }
  document.addEventListener('keydown', onEscByttonClick);
}
