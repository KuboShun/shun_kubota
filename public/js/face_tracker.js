navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

// input
var videoInput = document.getElementById('inputVideo');
var localStream = null;
navigator.getUserMedia({video: true, audio: false}, 
 function(stream) { // for success case
  console.log(stream);
  videoInput.src = window.URL.createObjectURL(stream);
 },
 function(err) { // for error case
  console.log(err);
 }
);


// tracker
var ctracker = new clm.tracker();
ctracker.init(pModel);
ctracker.start(videoInput);
var mouseLength;
var mouseOpenCount = 0;
var mouseFlag = false;
var positions = []

function positionLoop() {
  requestAnimationFrame(positionLoop);
  positions = ctracker.getCurrentPosition();
  // positions = [[x_0, y_0], [x_1,y_1], ... ]
  // do something with the positions ...
}
positionLoop();


var canvasInput = document.getElementById('drawCanvas');
var cc = canvasInput.getContext('2d');
function drawLoop() {
  requestAnimationFrame(drawLoop);
  cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
  ctracker.draw(canvasInput);
}
drawLoop();


var countSpace = document.getElementById("mouse_open_count")

function mouseCount() {
  if (positions[57][1]) {
    mouseLength = positions[57][1] - positions[60][1];
    if (mouseLength > 20 && mouseFlag == false) {
      mouseFlag = true;
      mouseOpenCount += 1;
      console.log("mouseOpenCount: " + mouseOpenCount)
      countSpace.innerHTML = mouseOpenCount
    }
    if (mouseLength < 5) {
      mouseFlag = false;
    }
  }
}
setInterval(mouseCount,100)
