const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20; // Size of each grid square
const tileCount = canvas.width / gridSize; // Number of tiles in each row/column

let apple = { x: 10, y: 10 }; // Player (apple) position
let snake = [{ x: 15, y: 15 }]; // Snake starts with one segment
let direction = { x: 0, y: 0 }; // Snake's movement direction
let snakeLength = 1; // Initial snake length
let gameOver = false; // Game state
let startTime = Date.now(); // Timer start
let timerInterval; // Timer interval reference

// Reset the game state
function resetGame() {
    apple = { x: 10, y: 10 };
    snake = [{ x: 15, y: 15 }];
    direction = { x: 0, y: 0 };
    snakeLength = 1;
    gameOver = false;
    startTime = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

// Update the timer display
function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = elapsedTime;
}

// Move the snake
function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Wrap around the canvas edges
    if (head.x < 0) head.x = tileCount - 1;
    if (head.x >= tileCount) head.x = 0;
    if (head.y < 0) head.y = tileCount - 1;
    if (head.y >= tileCount) head.y = 0;

    // Check for collision with itself
    for (let segment of snake) {
        if (segment.x === head.x && segment.y === head.y) {
            gameOver = true;
            //(`Game Over! You survived for ${Math.floor((Date.now() - startTime) / 1000)} seconds.`);
            resetGame();
            return;
        }
    }

    snake.unshift(head); // Add new head to the snake

    // Keep the snake at the correct length
    while (snake.length > snakeLength) {
        snake.pop();
    }
}

// Draw the game
function drawGame() {
    // Clear the canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the apple (player)
    ctx.fillStyle = "#f00";
    ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);

    // Draw the snake
    ctx.fillStyle = "#0f0";
    for (let segment of snake) {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    }
}

// Game loop
function gameLoop() {
    if (gameOver) return;

    moveSnake();
    drawGame();

    // Check if the snake catches the apple
    if (snake[0].x === apple.x && snake[0].y === apple.y) {
        gameOver = true;
        alert(`Game Over! You survived for ${Math.floor((Date.now() - startTime) / 1000)} seconds.`);
        resetGame();
    }

    // Increase snake speed and length over time
    const elapsedTime = (Date.now() - startTime) / 1000;
    if (elapsedTime > 10 && elapsedTime % 10 === 0) {
        snakeLength++;
    }

    requestAnimationFrame(gameLoop);
}

// Handle keyboard input for apple movement
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (apple.y > 0) apple.y--;
            break;
        case "ArrowDown":
            if (apple.y < tileCount - 1) apple.y++;
            break;
        case "ArrowLeft":
            if (apple.x > 0) apple.x--;
            break;
        case "ArrowRight":
            if (apple.x < tileCount - 1) apple.x++;
            break;
    }
});

// Initialize the game
resetGame();
gameLoop();