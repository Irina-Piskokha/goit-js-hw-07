import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const itemsGalary = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", itemsGalary);

container.addEventListener("click", showModal);
function showModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", keyBordPress);
      },
      onClose: () => {
        document.removeEventListener("keydown", keyBordPress);
      },
    }
  );
  instance.show();

  function keyBordPress(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
