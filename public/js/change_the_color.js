
var paint = "white"
console.log(paint);

var red_range, green_range, blue_range, rgb_setting;


$(".color_bar").on('mouseup', function(event) {
  get_color_range();
  $(".color_change_box").css("background-color", rgb_setting)
  $("#red_range_text").text(red_range)
  $("#green_range_text").text(green_range)
  $("#blue_range_text").text(blue_range)
});


function get_color_range(){
  red_range = document.getElementsByName("red_range")[0].value
  green_range = document.getElementsByName("green_range")[0].value
  blue_range = document.getElementsByName("blue_range")[0].value

  rgb_setting = "rgb(" + red_range + "," + green_range + "," + blue_range + ")"
  console.log("rgb_setting: " + rgb_setting);
}