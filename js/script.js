let container = document.querySelector(".catalogueConatiner")
let cards = container.querySelector(".imgCards").querySelectorAll(".card")
let img = container.querySelector(".imgDisplay").querySelector("img")
let i = 2

const preloadImages = () => {
    for (let j = 1; j < 6; j++) {
        const img = new Image();
        img.src = `../media/cata${j}.jpg`;
    }
};
preloadImages();

let isTransitioning = false;
cards.forEach((e, index) => {
    e.addEventListener("click", () => {
        cards.forEach(card => card.classList.remove('active'));
        e.classList.add('active');
        if (isTransitioning) return;
        isTransitioning = true;
        let src = `../media/cata${index + 1}.jpg`
        img.src = src
        isTransitioning = false;
        i = index + 2
    })
});

setInterval(() => {
    if (isTransitioning) return;
    isTransitioning = true;
    img.style.opacity = 0
    cards.forEach((card) => card.classList.remove('active'));
    setTimeout(() => {
        if (i === 6) {
            i = 1;
        }
        cards[i - 1].classList.add('active');
        console.log(i - 1);
        let src = `../media/cata${i}.jpg`;
        img.src = src;

        img.onload = () => {
            img.style.opacity = 1;
            isTransitioning = false;
        };

        i++;
    }, 300);
}, 3000)