let canvas = document.getElementById("snake");
let context = canvas.getContext('2d');
let box = 16;
let snake = [];
snake[0] = {
    x: 16 * box,
    y: 16 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 30 + 1) * box,
    y: Math.floor(Math.random() * 30 + 1) * box
}
 

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0 , 34 * box, 35 * box);
}
 var Game_score = 0;

function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "blue";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function updateDisplay(val) {
    document.getElementById("score").innerHTML = val;
}

function drawfood() {
    context.fillStyle = "green";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {

    if(snake[0].x > 30 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 32 * box;
    if(snake[0].y > 30 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 32 * box;

    for(i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo)
            alert('GAME OVER!!!');
        }
    }
    criarBG();
    criarCobrinha();
    drawfood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }
    
    else{food.x = Math.floor(Math.random() * 30 + 1) * box;
         food.y = Math.floor(Math.random() * 30 + 1) * box;
         updateDisplay (++Game_score);
    }
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

   
}

let jogo = setInterval(iniciarJogo, 110);
 