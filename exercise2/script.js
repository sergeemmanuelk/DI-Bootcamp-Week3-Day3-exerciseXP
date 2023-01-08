console.log("*****Exercise 2 : Move The Box*****")

let position = 0
let intervalId

function myMove() {
    intervalId = setInterval(frame, 1)
}

function frame() {
    if (position === 350) {
        clearInterval(intervalId)
    } else {
        position++
        document.getElementById("animate").style.left = position + "px"
    }
}
