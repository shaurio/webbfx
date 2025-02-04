// Array of sounds and their correct answers
const sounds = [
    { file: 'sounds/dog1.mp3', answer: 'Dog' },
    { file: 'sounds/dog2.mp3', answer: 'Dog' },
    { file: 'sounds/dog3.mp3', answer: 'Dog' },
    { file: 'sounds/dog4.mp3', answer: 'Dog' },
    { file: 'sounds/cat1.mp3', answer: 'Cat' },
    { file: 'sounds/cat2.mp3', answer: 'Cat' },
    { file: 'sounds/cat3.mp3', answer: 'Cat' },
    { file: 'sounds/car1.mp3', answer: 'Car' },
    { file: 'sounds/car2.mp3', answer: 'Car' },
    { file: 'sounds/car3.mp3', answer: 'Car' },
    // Add more sound objects with file paths and answers
];


// Variables to track score and game state
let correctGuesses = 0;
let incorrectGuesses = 0;
let isSoundPlayed = false; // Track if a sound has been played
let isGuessSubmitted = false; // Track if a guess has been submitted

// Select DOM elements
const playSoundButton = document.getElementById('playSound');
const userGuessInput = document.getElementById('userGuess');
const submitGuessButton = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const correctGuessesDisplay = document.getElementById('correctGuesses');
const incorrectGuessesDisplay = document.getElementById('incorrectGuesses');

let currentSound = {};

// Function to play a random sound
function playRandomSound() {
    // Prevent playing the sound if one is already played
    if (isSoundPlayed) {
        return; // Exit if a sound is already played
    }

    // Get a random sound from the array
    const randomIndex = Math.floor(Math.random() * sounds.length);
    currentSound = sounds[randomIndex];

    // Create an audio element and play the sound
    const audio = new Audio(currentSound.file);
    audio.play();

    // Set the state to indicate the sound has been played
    isSoundPlayed = true;

    // Enable the submit button now that the sound has been played
    submitGuessButton.disabled = false;

    // Clear any previous result message
    resultMessage.textContent = '';
    resultMessage.classList.remove('correct', 'incorrect', 'flash-correct', 'flash-incorrect');
}

// Function to check the user's guess
function checkGuess() {
    // Disable submit button to prevent multiple guesses
    submitGuessButton.disabled = true;

    const userGuess = userGuessInput.value.trim().toLowerCase();

    // Check if the guess is correct
    if (userGuess === currentSound.answer.toLowerCase()) {
        resultMessage.textContent = 'Correct! Well done!';
        resultMessage.classList.add('correct', 'flash-correct');
        correctGuesses++;
    } else {
        resultMessage.textContent = `Incorrect! The correct answer was: ${currentSound.answer}`;
        resultMessage.classList.add('incorrect', 'flash-incorrect');
        incorrectGuesses++;
    }

    // Update the score display
    correctGuessesDisplay.textContent = correctGuesses;
    incorrectGuessesDisplay.textContent = incorrectGuesses;

    // Clear the input field for the next guess
    userGuessInput.value = '';

    // Reset the state for the next round
    isSoundPlayed = false;
    isGuessSubmitted = true;
}

// Event listeners for buttons
playSoundButton.addEventListener('click', playRandomSound);
submitGuessButton.addEventListener('click', checkGuess);