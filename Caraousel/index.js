const data = [
    {
        src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
        alt: "A beautiful sunrise over the mountains",
        title: "Sunrise in the Mountains",
    },
    {
        src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        alt: "A calm beach with clear blue water",
        title: "Relaxing Beach",
    },
    {
        src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        alt: "A dense forest with towering trees",
        title: "Mystic Forest",
    },
    {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        alt: "A cityscape at night with bright lights",
        title: "City Lights at Night",
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661963018046-7054caf59ba9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "A serene lake surrounded by mountains",
        title: "Peaceful Lake",
    },
];

const imageContainerEl = document.querySelector('.images');

function createCarouselImage(image, key) {
    const imageEl = document.createElement('img');
    imageEl.setAttribute('src', image.src)
    imageEl.setAttribute('alt', image.alt)
    imageEl.classList.add('image')
    imageEl.classList.add(key === 0 ? 'show' : 'hide')
    imageEl.dataset.id = key
    return imageEl
}

function renderCarosuel(images) {
    const docFragment = document.createDocumentFragment();
    images.forEach((image, i) => {
        let imageEl = createCarouselImage(image, i)
        docFragment.appendChild(imageEl);
    });
    imageContainerEl.appendChild(docFragment)
}

function btnClicked(e, action) {
    const imagesEl = document.querySelectorAll('.image')
    let activeImageId;
    let activeImageEl;

    imagesEl.forEach((image) => {
        if (image.classList.contains('show')) {
            activeImageEl = image
            activeImageId = activeImageEl.dataset.id;
        }
    });
    console.log(activeImageEl)
    activeImageEl.classList.add('hide');
    activeImageEl.classList.remove('show');

    if (action === 'next') {

        const nextImage = activeImageEl.nextElementSibling || imagesEl[0];
        nextImage.classList.add('show')
        nextImage.classList.remove('hide');
    } else {
        const prevImage = activeImageEl.previousElementSibling || imagesEl[imagesEl.length - 1];
        prevImage.classList.add('show')
        prevImage.classList.remove('hide')
    }

}

const nextBtnEl = document.querySelector('.next-btn').addEventListener('click', (e) => btnClicked(e, 'next'));
const prevBtnEl = document.querySelector('.prev-btn').addEventListener('click', (e) => btnClicked(e, 'prev'));;

renderCarosuel(data)
