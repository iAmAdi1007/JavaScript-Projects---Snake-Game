import {SNAKE_SPEED, update as updateSnake, draw as drawSnake} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js";
let lastRenderTime = 0;
const gameBoard = document.getElementById("board");

//Game function
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastRenderTime)/1000 < (1 / SNAKE_SPEED)) return;
    //console.log("Render");
    lastRenderTime = ctime;

    update();
    draw(gameBoard);
}

//Run Main Function
//window.requestAnimationFrame(main);

function draw(gameBoard){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function update(){
    updateSnake();
    updateFood();
}