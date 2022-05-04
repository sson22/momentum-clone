const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${chosenImage}`;

document.body.appendChild(backgroundImage);