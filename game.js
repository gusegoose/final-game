let lastRenderTime = 0



function main(currenTime) {
    window.requestAnimationFrame (main)
    const secondsSinceLastRender = (currenTime - lastRenderTime ) / 1000 
     if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
console.log('Render')
lastRenderTime = currenTime

update()
draw()

} 

window.requestAnimationFrame(main)

function update() {

}


function draw() {
    
}