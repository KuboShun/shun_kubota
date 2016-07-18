var canvas = document.getElementsByClassName("make_balls_canvas")[0]
var context = canvas.getContext("2d")
var r, g, b;
canvas.width = 600;
canvas.height = 400;
var speedX = [];
var speedY = [];
var locX = [];
var locY = [];
var radius = [];
var rgbSetting = [];
var canvasRect;
var i = 0;

init()

function init() {
  context.closePath()
  context.rect(0,0,600,400)
  context.stroke()
  context.closePath()

  document.addEventListener("click", makeBalls, false)

}


function makeBalls(e) {
  var canvasRect = e.target.getBoundingClientRect()

  r = Math.floor(Math.random() * 255)
  g = Math.floor(Math.random() * 255)
  b = Math.floor(Math.random() * 255)
  rgbSetting[i] = "rgb(" + r + ", " + g + ", " + b + ")"
  console.log(rgbSetting[i])

  speedX[i] = Math.random() * 8.0 - 4.0;
  speedY[i] = Math.random() * 8.0 - 4.0;

  locX[i] = e.clientX - canvasRect.left
  locY[i] = e.clientY - canvasRect.top

  radius[i] = Math.random() * 5 + 5

  context.fillStyle = rgbSetting[i]
  context.beginPath()
  context.arc(locX[i], locY[i], radius[i], 0, 2 * Math.PI, true)
  context.fill()
  context.closePath()

  i++;
  if (i == 1) {
    setInterval(draw, 100);
  }
}


function draw() {
  console.log("i: " + i)
  for (var j = 0; j <= i; j++) {
    locX[j] += speedX[j]
    locY[j] += speedY[j]

    if (locX[j] < 0 || locX[j] > canvas.width) {
      speedX[j] *= -1
    }
    if (locY[j] < 0 || locY[j] > canvas.height) {
      speedY[j] *= -1
    }

    context.fillStyle = rgbSetting[j]
    context.beginPath()
    context.arc(locX[j], locY[j], radius[j], 0, 2 * Math.PI, true)
    context.fill()
    context.closePath()

    console.log("j: " + j)
  }
  setInterval(draw, 100);
}
