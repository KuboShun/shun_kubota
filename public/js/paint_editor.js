
var canvas = document.getElementsByClassName("canvas")[0]
var canvas_x = document.getElementsByClassName("canvas")[0].getBoundingClientRect().left
var canvas_y = document.getElementsByClassName("canvas")[0].getBoundingClientRect().top
var drawFlag = false
var oldX, oldY
var pen_color

window.addEventListener("load", function(){
  get_color_range()

  canvas.addEventListener("mouseup", function(){
    drawFlag = false
  }, false)
  canvas.addEventListener("mousedown", function(e){
    drawFlag = true
    oldX = e.clientX - canvas_x
    oldY = e.clientY - canvas_y
  }, false)

  canvas.addEventListener("mousemove", draw, true)
  console.log(drawFlag)  
}, true);

//描画処理
function draw(e){
    if (!drawFlag) return
    var x = e.clientX - canvas_x
    var y = e.clientY - canvas_y
    var context = canvas.getContext("2d")

    context.lineWidth = width_range
    context.strokeStyle = rgb_setting
    context.beginPath()
    context.moveTo(oldX, oldY)
    context.lineTo(x, y)
    context.stroke()
    context.closePath()

    oldX = x
    oldY = y
}



// change the color
var paint = "white"
var red_range, green_range, blue_range, rgb_setting;
var width_range = 1

$(".color_bar").on('mouseup', function(event) {
  get_color_range();
  $(".color_change_box_2").css("background-color", rgb_setting)
  $("#red_range_text").text(red_range)
  $("#green_range_text").text(green_range)
  $("#blue_range_text").text(blue_range)
  $("#width_range_text").text(width_range)
});

function get_color_range(){
  red_range = document.getElementsByName("red_range")[0].value
  green_range = document.getElementsByName("green_range")[0].value
  blue_range = document.getElementsByName("blue_range")[0].value
  width_range = document.getElementsByName("width_range")[0].value
  rgb_setting = "rgb(" + red_range + "," + green_range + "," + blue_range + ")"
  console.log("rgb_setting: " + rgb_setting);
}