const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["Pilt1.jpg", "Pilt2.jpg", "Pilt3.jpg", "Pilt4.jpg"];

//image.src = `images/${images[0]}`;
image.src = "images/" + images[0];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex, images[randomIndex]);

    image.src = "images/" + images[randomIndex];
}

