const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

function galleryBuilder(images) {
  const galleryContainer = document.querySelector("ul");
  galleryContainer.appendChild(fragmentBuilder(images));
}

function fragmentBuilder(images) {
  const fragment = document.createDocumentFragment();
  images.forEach((image) => {
    const resCreateElementLi = createElementLi();
    const resCreateElementLink = createElementLink(image);
    const resReateImg = createImg(image);
    resCreateElementLink.appendChild(resReateImg);
    resCreateElementLi.appendChild(resCreateElementLink);
    fragment.appendChild(resCreateElementLi);
  });
  return fragment;
}
function createElementLi() {
  const createdElementLi = document.createElement("li");
  createdElementLi.classList.add("gallery-item");
  return createdElementLi;
}

function createElementLink(image) {

  const createdElementLink = document.createElement("a");
  createdElementLink.classList.add("gallery-link");
  createdElementLink.href = image.original;
  const instance = basicLightbox.create(`<img src="${image.original}" alt="${image.description}">`);
  createdElementLink.addEventListener("click",(event) =>imedgeClickIvent (event, instance)
);
createdElementLink.addEventListener("keydown",(event) =>closeModal (event, instance)
);


  return createdElementLink;
}

function createImg(image) {
  const createdImg = document.createElement("img");
  createdImg.classList.add("gallery-image");
  createdImg.src = image.preview;
  createdImg.setAttribute("data-source", "large-image.jpg");
  createdImg.alt = image.description;
  return createdImg;
}
function imedgeClickIvent (event, instance){
  event.preventDefault();
  console.log(event.target.src);
  instance.show();
  
}

function closeModal (event, instance){
if (event.key === "Escape"){
  instance.close();
}

}

galleryBuilder(images);
