var score = 0
var x = [420, 420, 60]
var y = [15, 45, 25]

function UpdateGameArea() {
  document.getElementById("score").style.left = x[0] + "px"
  document.getElementById("score").style.top = y[0] + "px"
}

setInterval(UpdateGameArea, 100)
