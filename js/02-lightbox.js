import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const itemsGalary = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", itemsGalary);

container.addEventListener("click", showModal);
function showModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;
  let gallery = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
