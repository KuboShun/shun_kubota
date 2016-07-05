$(document).ready(function () {

  var paint = "white"
  console.log(paint);

  $(".color").on("click", function () {
    paint = $(this).css('background-color');
    console.log(paint);
  })

  $('.colorbox').on('click', function () {
    $(this).css("background-color", paint );
    console.log(paint);
  });

});

/*

window.onload = function drawTheWall();

 {
  var paint_color = "white"
  var color = document.getElementsByClassName("color")
  
  console.log(color);

  color.onClick = function(){
    console.log(paint_color);
    paint_color = this.css('background');
  }

  document.getElementsByClassName("colorbox").onClick = function(){
    console.log(paint_color);
    this.css('background', paint_color);
  }
}
*/