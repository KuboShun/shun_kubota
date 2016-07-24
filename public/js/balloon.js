$("#balloon").draggable();

var balloon = document.getElementById("balloon");
var balloon_space = document.getElementsByClassName("balloon_space")[0];
var top_space = balloon_space.offsetTop;
console.log("top_space: " + top_space);
var bh = balloon.offsetHeight;
var topP;
var R = 0.48;
var y = balloon.offsetHeight;
var v = 0;
var moveFrag = false;
var g;

console.log(y)

function gravity() {
  if (moveFrag) {
    y = topP;
    moveFrag = false;
    console.log("topP_3: " + topP);
  }

  y -= ++v;
  if (y <= top_space) {
    y = top_space;
    v *= -R;
  }
  document.getElementById("balloon").style.top = y + "px";

  g = setTimeout(gravity, 100);
}

balloon.addEventListener("mouseup",function(){
  topP = balloon.offsetTop;
  console.log("topP_1: " + topP);
  moveFrag = true;

  gravity();
  
})

balloon.addEventListener("mousedown",function(){
  clearTimeout(g);
});

gravity();
