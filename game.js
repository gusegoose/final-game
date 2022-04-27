let lastRenderTime = 0


function main(currenTime) {
    constsecondsSinceLastRender = (currenTime - lastRenderTime ) / 1000 
window.requestAnimationFrame (main)
console.log(secondsSinceLastRender)
lastRenderTime = currenTime

}

window.requestAnimationFrame(main)
