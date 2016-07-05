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


