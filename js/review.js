"use strict";

/// json data ///
let data = [
  {
    name: "cat",
    img: "https://img.etimg.com/thumb/msid-93429238,width-650,imgsize-34182,,resizemode-4,quality-100/international-cat-day-2022-all-you-need-to-know-about-date-significance-history.jpg",
    color: "black",
    description:
      "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face. The most familiar colour variant is the 'British Blue', with a solid grey-blue coat, orange eyes, and a medium-sized tail",
  },
  {
    name: "dog",
    img: "https://dogtime.com/assets/uploads/gallery/siberian-husky-puppies/husky-1.jpg",
    color: "black and white",
    description:
      "One of the most recognizable, iconic, and historically praised breeds is the Siberian Husky. And there are few creatures more adorable than Husky puppies",
  },
  {
    name: "horse",
    img: "https://w0.peakpx.com/wallpaper/438/1023/HD-wallpaper-wild-hourse-black-nature.jpg",
    color: "black",
    description:
      "Przewalski's horse had reached the brink of extinction but was reintroduced successfully into the wild.[5] The tarpan became extinct in the 19th century but is theorized to have been present on the steppes of Eurasia at the time of domestication",
  },
];

/// elements that will be manipulated
let img = document.querySelector("#review_Img");
let names = document.querySelector("#name");
let color = document.querySelector("#color");
let description = document.querySelector("#description");

/// btn DOM and counter ///
let nextBtn = document.querySelector("#nextBtn");
let preBtn = document.querySelector("#preBtn");
let randomBtn = document.querySelector("#randomBtn");
let animal = 0;

/// change element iteration forward on click
nextBtn.addEventListener("click", () => {
  let review = data[animal];
  ++animal;

  if (animal >= data.length) {
    animal = 0;
  }

  //// elements
  img.setAttribute("src", review.img);
  names.innerHTML = review.name;
  color.innerHTML = review.color;
  description.innerHTML = review.description;
});

/// change element iteration backwards on click
preBtn.addEventListener("click", () => {
  let review = data[animal];
  --animal;

  if (animal < 0) {
    animal = 2;
  }

  img.setAttribute("src", review.img);
  names.innerHTML = review.name;
  color.innerHTML = review.color;
  description.innerHTML = review.description;
});

//// randomly change iteraation ////
randomBtn.addEventListener("click", () => {
  let animal = Math.floor(Math.random() * 3);
  let review = data[animal];
  img.setAttribute("src", review.img);
  names.innerHTML = review.name;
  color.innerHTML = review.color;
  description.innerHTML = review.description;
});
