var score = 0
var x = [960, 420, 60]
var y = [15, 45, 25]
let GetLeft = () => {
  x[1] -= 10
  FlappyClicked();
}
const FlappyClicked = () => {
  document.getElementById("audio1").play();
}

function UpdateGameArea() {
  document.getElementById("score").style.left = x[0] + "px"
  document.getElementById("score").style.top = y[0] + "px"
  document.getElementById("player").style.left = x[1] + "px"
  document.getElementById("player").style.top = y[1] + "px"
}

setInterval(UpdateGameArea, 100)
