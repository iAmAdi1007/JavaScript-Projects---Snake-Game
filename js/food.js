import {onSnake, expandSnake} from './snake.js'
let food = {x : 2 , y : 2}
const EXPANSION_RATE = 1;
let countFood = 0;

export function update(){
    if(onSnake(food)){
        countFood += 1;
        expandSnake(EXPANSION_RATE);
        document.getElementById("points").innerText = countFood;
        food = generateFood()
    }
}

export function draw(gameBoard){
    
    let foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList = "food"
    gameBoard.appendChild(foodElement);
    
}

function generateFood(){
    return {x : Math.round(Math.random() * 15), y : Math.round(Math.random() * 15) }
}