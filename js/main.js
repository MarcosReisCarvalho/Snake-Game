let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Contexto renderiza um desenho que vai acontecer no canvas
let box = 32; // 32px cada quadrado
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

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

criarBG();
criarCobra();