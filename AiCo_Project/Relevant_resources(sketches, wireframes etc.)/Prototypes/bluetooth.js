// Get the buttons from the DOM
const startGameButton = document.querySelector('button[type="submit"]');
const connectBluetoothButton = document.querySelector('#connect-bluetooth');

// Variable to keep track of Bluetooth connection
let bluetoothConnected = false;

// Add event listener for "Connect Bluetooth" button
connectBluetoothButton.addEventListener('click', function() {
  // Simulate Bluetooth connection by setting variable to true
  bluetoothConnected = true;
});

// Add event listener for "Start Game" button
startGameButton.addEventListener('click', function(event) {
  // If Bluetooth is not connected, prevent the form from submitting
  if (!bluetoothConnected) {
    event.preventDefault();
    alert('Please connect to Bluetooth before starting the game!');
  }
});
