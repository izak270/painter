
var home = {}
home.colors = ["red", "green"];
home.chooseColor = "black"
home.choosesize = ['1px', '1px']
// for(color of home.colors){
//    document.createElement('dive')

// }
// var tools = document.querySelector('.tools')
// var size = document.createElement('input')
// // size.setAttribute

// // size.setAttribute("type","checkbox")
// // size.classList.add("small")
// // size.value = "smal"
// // size.innerText = "sd"
// // tools.appendChild(size)
const choosColor = (e) => {
    home.chooseColor =e.target.id;
    console.log(e.target.id) }
var colorsjs = document.querySelectorAll('.color')
for (color of colorsjs) {
    color.addEventListener('click', choosColor)
}



const chooseSize = () => {
    var small = document.querySelector('.small');
    var medium = document.querySelector('.medium')
    var big = document.querySelector('.big')
    if (small.checked) {
        home.choosesize[0] = ["2px"]
        home.choosesize[1] = ["2px"]
    }
    else if (medium.checked) {
        home.choosesize[0] = ["5px"]
        home.choosesize[1] = ["5px"]
    }
    else if (big.checked) {
        home.choosesize[0] = ["10px"]
        home.choosesize[1] = ["10px"]
    }
}
var colors = document.querySelector('.colors')

var move = false
var canvas = document.querySelector('.canvas1')
const paint = () => {
    if (move) {
        var newLine = document.createElement('div')
        newLine.style.backgroundColor = home.chooseColor
        newLine.style.width = home.choosesize[0];
        newLine.style.height = home.choosesize[1];
        canvas.appendChild(newLine)
        newLine.style.position = "absolute";
        newLine.style.left = `${event.pageX}px`;
        newLine.style.top = `${event.pageY}px`;
    }
}
const paintOnMove = () => {
    canvas.addEventListener('mousemove', paint)
}
canvas.addEventListener('mousedown', paintOnMove)
const startMove = () => {
    move = true
    chooseSize()
    return move
}
const stopMove = () => {
    move = false
    return move
}
canvas.addEventListener('mousedown', startMove)
window.addEventListener('mouseup', stopMove)




