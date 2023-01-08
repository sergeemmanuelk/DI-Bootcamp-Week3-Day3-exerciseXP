console.log("*****Exercise 1: Timer*****")

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
setTimeout(function() {
    // The function will alert “Hello World”.
    alert("Hello World")
}, 2000)
  
// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
setTimeout(function() {
    // The function will add a new paragraph <p>Hello World</p> to the <div id="container">
    let container = document.getElementById("container")
    let p = document.createElement("p")
    p.innerHTML = "Hello World"
    container.appendChild(p)
}, 2000)

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
let interval = setInterval(function() {
    let container = document.getElementById("container")
    let p = document.createElement("p")
    p.innerHTML = "Hello World"
    // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
    container.appendChild(p)
    if (container.childElementCount === 5) {
        // The interval will be cleared (ie. clearInterval), when the user will click on the button.
        clearInterval(interval)
    }
}, 2000)
  
/* Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
as soon as there will be 5 paragraphs inside the <div id="container">.*/
document.getElementById("clear").addEventListener("click", function() {
    clearInterval(interval)
})