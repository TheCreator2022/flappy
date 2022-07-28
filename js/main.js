var score = 0
var x = [960, 420, 800]
var y = [15, 45, 165]
let GetLeft = () => {
  x[1] -= 10
  FlappyClicked();
}
let GetRight = () => {
  x[1] += 10
  FlappyClicked();
}
let GetUp = () => {
  y[1] -= 10
  FlappyClicked();
}
let GetDown = () => {
  y[1] += 10
  FlappyClicked();
}
const FlappyClicked = () => {
  document.getElementById("audio1").play();
}
const ErrorPost = () => {
  document.getElementById("audio2").play();
}

function UpdateGameArea() {
  document.getElementById("score").style.left = x[0] + "px"
  document.getElementById("score").style.top = y[0] + "px"
  document.getElementById("player").style.left = x[1] + "px"
  document.getElementById("player").style.top = y[1] + "px"
  document.getElementById("square").style.left = x[2] + "px"
  document.getElementById("square").style.top = y[2] + "px"
  if (Math.sqrt(x[1]) == NaN) {
    ErrorPost();
  }
  document.getElementById("score").innerText = score
  document.body.style.backgroundColor = "rgb(128, 128, 128)" // We so Alpha omega layers color.
}

setInterval(UpdateGameArea, 100)
