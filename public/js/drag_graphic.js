var canvas = document.getElementsByClassName("drag_graphic_canvas")[0]
var context = canvas.getContext("2d")
var block = document.getElementsByClassName("block_area")[0]


init();

function init(){

  for (var i = 0; i < block.children.length; i++) {
    block.children[i].addEventListener("click", selectElement)
  }

// $( "#draggable" ).draggable();

}


function selectElement(e) {
  for (var i = 0; i < block.children.length; i++) {
    $(".block_area").children().removeClass('active')    
  }
  shape = this.className
  console.log(shape)
  $(this).addClass('active')
  makeShape(shape)
}

function makeShape(shape) {
  $(".block_area").append('<div class="draggable ' + shape + '"></div>')
  var draggableCount = document.getElementsByClassName("draggable")
  console.log(draggableCount)
  console.log(draggableCount.length)
  console.log(draggableCount[(draggableCount.length - 1)])

  $(".draggable").draggable()
}