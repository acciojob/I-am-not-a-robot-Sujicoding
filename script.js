//your code here
// Array of image URLs
var images = [
  'url_to_image1.jpg',
  'url_to_image2.jpg',
  'url_to_image3.jpg',
  'url_to_image4.jpg',
  'url_to_image5.jpg',
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
var imageContainer = document.getElementById('imageContainer');
var tiles = imageContainer.getElementsByClassName('tile');

for (var i = 0; i < tiles.length; i++) {
  var tile = tiles[i];
  tile.src = images[imageIndices[i]];
  tile.dataset.id = imageIndices[i];
  tile.addEventListener('click', handleTileClick);
}

// Track the state of the game
var clickedTiles = [];
var resetButton = document.getElementById('reset');
var verifyButton = document.getElementById('verify');
var para = document.getElementById('para');

function handleTileClick() {
  var clickedTile = this;

  // Prevent selecting the same tile twice
  if (clickedTiles.length === 1 && clickedTiles[0] === clickedTile) {
    return;
  }

  // Add clicked tile to the array
  clickedTiles.push(clickedTile);

  // Show the reset button
  resetButton.style.display = 'inline-block';

  // Check the state and update the UI accordingly
  if (clickedTiles.length === 2) {
    verifyButton.style.display = 'inline-block';
  }

  // Check if both clicked tiles are identical
  if (clickedTiles.length === 2 && clickedTiles[0].dataset.id === clickedTiles[1].dataset.id) {
    para.textContent = 'You are a human. Congratulations!';
  }
}

function resetGame() {
  clickedTiles = [];
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
