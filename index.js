const imageContainerEl = document.querySelector(".img-container")
const buttonEl = document.querySelector(".btn")

//Click button to load more images

buttonEl.addEventListener("click", () => {
    imageNum = 10;
    AddNewImages()
});

//Adding new images

function AddNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000
        )}`;
        imageContainerEl.appendChild
            (newImgEl);

    }

}
