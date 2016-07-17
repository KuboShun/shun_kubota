var box_number = document.getElementsByClassName("box_number")
var box_elements = []
var box_name = []
var r,g,b,a,rgbSetting;


var canvas = document.getElementsByClassName("box_space")[0]
var context = canvas.getContext("2d")
canvas.width = 600;
canvas.height = 400;

init()

function init() {
  setInterval(drawRectangle,100)
}

function drawRectangle(){
  for (var i = 0; i < canvas.width / 20; i++) {
    for (var j = 0; j < canvas.height / 20; j++) {

      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      a = 0.5;
      rgbSetting = "rgba(" + r + ", "+ g + ", " + b + "," + a + ")";

      context.fillStyle = rgbSetting
      context.beginPath()
      context.moveTo(i * 20     , j * 20)
      context.lineTo(i * 20 + 20, j * 20)
      context.lineTo(i * 20 + 20, j * 20 + 20)
      context.lineTo(i * 20     , j * 20 + 20)
      context.fill()
    }
  }
}