var score = 0
var x = [30, 45, 60]
var y = [10, 25, 25]

function UpdateGameArea() {
  document.getElementById("score").style.left = x[0] + "px"
  document.getElementById("score").style.top = y[0] + "px"
}

setInterval(UpdateGameArea, 100)
