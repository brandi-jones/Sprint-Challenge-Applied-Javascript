/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel() {
  //create elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2= document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  //add classes
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  //create structure
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  //add content
  leftButton.textContent = "<";
  rightButton.textContent = ">";
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  //create carousel component
  const arrayImages = [img1, img2, img3, img4];
  let currentIndex = 0;
  img1.style.display = "block"; //start with img1 displayed

  //to handle looping over the array of images
  function checkIndex(currentIndex) {
    if (currentIndex >= arrayImages.length) {
      currentIndex = 0; //if currentIndex is above the total length of images in the carousel, start back at image 1 (position 0 in arrayImages)
    }
    else if (currentIndex < 0) {
      currentIndex = arrayImages.length-1; //if currentIndex is below 0, roll back the currentIndex to start at the end of the carousel (last position in arrayImages)
    }

    return currentIndex;
  }

  leftButton.addEventListener('click', () => {
    
    arrayImages[currentIndex].style.display = "none";
    currentIndex--;
    currentIndex = checkIndex(currentIndex);
    arrayImages[currentIndex].style.display = "block";
  });

  rightButton.addEventListener('click', () => {
    
    arrayImages[currentIndex].style.display = "none";
    currentIndex++;
    currentIndex = checkIndex(currentIndex);
    arrayImages[currentIndex].style.display = "block";
  });


  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(createCarousel());

