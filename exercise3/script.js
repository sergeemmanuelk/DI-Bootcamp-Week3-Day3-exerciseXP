let isDragging = false
let currentX
let currentY
let initialX
let initialY
let xOffset = 0
let yOffset = 0

const box = document.getElementById("box")
const target = document.getElementById("target")

box.addEventListener("mousedown", dragStart)
box.addEventListener("mouseup", dragEnd)
box.addEventListener("mousemove", drag)

function dragStart(e) {
    initialX = e.clientX - xOffset
    initialY = e.clientY - yOffset

    if (e.target === box) {
        isDragging = true
    }
}

function dragEnd(e) {
    initialX = currentX
    initialY = currentY

    isDragging = false
}

function drag(e) {
    if (isDragging) {
        e.preventDefault()
        currentX = e.clientX - initialX
        currentY = e.clientY - initialY

        xOffset = currentX
        yOffset = currentY

        setTranslate(currentX, currentY, box)
    }
}

function setTranslate(xPosition, yPosition, el) {
    el.style.transform = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)"
}

target.addEventListener("dragenter", function(e) {
    e.preventDefault()
    this.style.background = "red"
})
  
target.addEventListener("dragover", function(e) {
    e.preventDefault()
})
  
target.addEventListener("drop", function(e) {
    e.preventDefault()
    this.style.background = "yellow"
    if (e.target === this) {
        box.style.display = "none"
    }
})
  