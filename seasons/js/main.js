"use strict";
{
  const descriptionsDom = document.querySelectorAll(".description");
  const imagesDom = document.querySelectorAll(".image__item");

  console.log(descriptionsDom, imagesDom);

  descriptionsDom.forEach((descriptionDom, index) => {
    const descriptionActiveClass = "description--active";
    const imageActiveClass = "image__item--active";

    descriptionDom.addEventListener("click", () => {
      if (!descriptionDom.classList.contains(descriptionActiveClass)) {
        descriptionsDom.forEach((descriptionDom, index) => {
          descriptionDom.classList.remove(descriptionActiveClass);
          imagesDom[index].classList.remove(imageActiveClass);
        });
        descriptionDom.classList.add(descriptionActiveClass);
        imagesDom[index].classList.add(imageActiveClass);
      }
    });
  });

}