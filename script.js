//your code here
// Array of image URLs
var images = [
  'url_to_img1.jpg',
  'url_to_img2.jpg',
  'url_to_img3.jpg',
  'url_to_img4.jpg',
  'url_to_img5.jpg',
];

// Randomly select an image to repeat
var repeatedImageIndex = Math.floor(Math.random() * images.length);

// Create an array of image indices
var imageIndices = [...Array(images.length).keys()];

// Shuffle the image indices randomly
for (var i = imageIndices.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  [imageIndices[i], imageIndices[j]] = [imageIndices[j], imageIndices[i]];
}

// Render the images with shuffled sources and data-id attributes
var imageContainer = document.getElementByClassName('imageContainer');
var img = imageContainer.getElementsByID('img');

for (var i = 0; i < tiles.length; i++) {
  var img = tiles[i];
  tile.src = images[imageIndices[i]];
  tile.dataset.id = imageIndices[i];
  tile.addEventListener('click', handleTileClick);
}

// Track the state of the game
var clickedImg = [];
var resetButton = document.getElementById('reset');
var verifyButton = document.getElementById('verify');
var para = document.getElementById('para');

function handleImgClick() {
  var clickedImg = this;

  // Prevent selecting the same tile twice
  if (clickedImg.length === 1 && clickedImg[0] === clickedImg) {
    return;
  }

  // Add clicked tile to the array
  clickedImg.push(clickedImg);

  // Show the reset button
  resetButton.style.display = 'inline-block';

  // Check the state and update the UI accordingly
  if (clickedImg.length === 2) {
    verifyButton.style.display = 'inline-block';
  }

  // Check if both clicked tiles are identical
  if (clickedImg.length === 2 && clickedImg[0].dataset.id === clickedImg[1].dataset.id) {
    para.textContent = 'You are a human. Congratulations!';
  }
}

function resetGame() {
  clickedImg = [];
  resetButton.style.display = 'none';
  verifyButton.style.display = 'none';
  para.textContent = '';
}

resetButton.addEventListener('click', resetGame);

verifyButton.addEventListener('click', function () {
  verifyButton.style.display = 'none';
  if (clickedTiles[0].dataset.id === clickedTiles[1].dataset.id) {
    para.textContent = 'You are a human. Congratulations!';
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
});
