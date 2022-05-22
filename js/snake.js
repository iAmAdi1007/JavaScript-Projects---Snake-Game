import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody =[{x : 8 , y : 11}, {x : 9 , y : 11}];
let newSegments = 0;

export function update(){
    addSegments();
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;


}

export function draw(gameBoard){
    snakeBody.forEach((segment)=>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList = "snake"
        gameBoard.appendChild(snakeElement);
    })
}

export function onSnake(food){
    return snakeBody[0].x === food.x && snakeBody[0].y === food.y;
}

export function expandSnake(rate){
    newSegments += rate;
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
    }
    newSegments = 0;
}

