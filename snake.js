export SNAKE_SPEED = 1 
const snakeBody = [ 
    {x: 10, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11},
]

export function update() {
    console.log ('update snake')

}

export function draw(gameBoard) {
snakeBody. forEach(segmant => {
const snakeElemeent= document.createElement('div')
snakeElemeent.style.gridRowStart = segment.x
snakeElemeent.style.gridColumnStart = segment.y
snakeElemeent.classList.add('snake')
gameBoard.appendChild(snakeElemeent)
})
}