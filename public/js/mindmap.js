var canvas = document.getElementsByClassName("mindmap_canvas")[0]
var mindmap_new = document.getElementsByClassName("mindmap_new")[0]

init()

function init() {
  mindmap_new.addEventListener("click", function(){
    console.log("hoge")
//    $(".mindmap_space").append('<input class="draggable ' + 'square' + '"></input>')
    $(".mindmap_space").append('<div class="draggable circle"><input type="text"></input></div>')
    $(".draggable").draggable()

  })
}

