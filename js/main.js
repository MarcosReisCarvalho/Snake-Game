let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Contexto renderiza um desenho que vai acontecer no canvas
let box = 32; // 32px cada quadrado
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//criar background
function criarBG() {
    // cor do body
    context.fillStyle = "lightgreen";
    // desenha o retangulo onde vai acontcer o jogo
    //fillRect(x,y)
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
    for( i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobra();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY = box;
    if(direction == "down") snakeY -= box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)

}

let jogo = setInterval(iniciarJogo, 100);
