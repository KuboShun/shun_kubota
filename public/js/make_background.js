var canvas = document.getElementsByClassName("make_background_canvas")[0]
var context = canvas.getContext("2d")
canvas.width = 600;
canvas.height = 400;
var select_box = document.getElementsByClassName("select_box")[0]

init()

function init() {

//  makeBackground();
//  makeRect()
//  makeCircle()
//  makeDotGradation()
//  makeTriangle()
//  makeRadiation()
//  makeRadiation2()
//  makeSpiral()
//  makeWave()
  makeSinWave()
  for (var i = 0; i < select_box.children.length; i++) {
    select_box.children[i].addEventListener("click", changeBackground)
  }
}


function changeBackground(e){
  context.fillStyle = "#ffffff" 
  context.fillRect(0, 0, canvas.width, canvas.height)
  var selectBackground = this.id
  console.log(selectBackground)
  eval (selectBackground +"()")
  
}

function makeRect() {
  context.fillStyle = "#0000ff"
  for (var i = 0; i < canvas.width/20; i++) {
    for (var j = 0; j < canvas.height/20; j++) {  
      context.beginPath()
      context.moveTo(2 * i * 20, 2 * j * 20)
      context.lineTo((2 * i + 1) * 20, 2 * j * 20)
      context.lineTo((2 * i + 1) * 20, (2 * j + 1) * 20)
      context.lineTo(2 * i * 20, (2 * j + 1) * 20)
      context.closePath()
      context.fill()
    }
  }

  for (var i = 0; i < canvas.width/20; i++) {
    for (var j = 0; j < canvas.height/20; j++) {  
      context.beginPath()
      context.moveTo(2 * i * 20 + 20, 2 * j * 20 + 20)
      context.lineTo((2 * i + 1) * 20 + 20, 2 * j * 20 + 20)
      context.lineTo((2 * i + 1) * 20 + 20, (2 * j + 1) * 20 + 20)
      context.lineTo(2 * i * 20 + 20, (2 * j + 1) * 20 + 20)
      context.closePath()
      context.fill()
    }
  }
}

function makeCircle() {
  context.fillStyle = "#0000ff"
  for (var i = 0; i < canvas.width/5; i++) {
    for (var j = 0; j < canvas.height/5; j++) {
      if (i%2 && j%2 == 0) {
        context.beginPath()
        context.arc(i * 7 + 7, j * 7 + 7, 3, 0, 2 * Math.PI, true)
        context.arc(i * 7, j * 7, 3, 0, 2 * Math.PI, true)
        context.closePath()
        context.fill()
      }
    }
  }
}

function makeDotGradation() {
  context.fillStyle = "#0000ff"
  for (var i = 0; i < canvas.width/5; i++) {
    for (var j = 0; j < canvas.height/5; j++) {
      if (i%2 && j%2 || i%2 ==0 && j%2 ==0) {
        context.beginPath()
        context.arc(i * 7, j * 7, j / 3 / 4, 0, 2 * Math.PI, true)
        context.closePath()
        context.fill()
      }
    }
  }  
}

function makeTriangle() {
  context.fillStyle = "#0000ff"
  for (var i = 0; i < canvas.width; i++) {
    for (var j = 0; j < canvas.height; j++) {
      k = j % 2 ? -10 : 0
      context.globalAlpha = j / (canvas.height/5)
      context.beginPath()
      context.moveTo(i * 20 + k, j * 20)
      context.lineTo(i * 20 + 20 + k, j * 20)
      context.lineTo(i * 20 + 10 + k, j * 20 + 20)
      context.closePath()
      context.fill()
    }
  }
}

function makeRadiation() {
  context.fillStyle = "#0000ff"
  context.strokeStyle = "#0000ff"
  context.lineWidth = 15;
  var p = Math.sqrt(Math.pow(canvas.width/2, 2) + Math.pow(canvas.height/2, 2)) 
  for (var i = 0; i < 90; i++) {
    context.moveTo(canvas.width/2, canvas.height/2)
    context.lineTo(p * Math.cos(Math.PI * 2 / 90 * i) + canvas.width/2,
                    p * Math.sin(Math.PI * 2 / 90 * i) + canvas.height/2)
  }
  context.stroke()
}

function makeRadiation2() {
  context.fillStyle = "#0000ff"
  context.strokeStyle = "#0000ff"
  context.lineWidth = 15;
  var p = Math.sqrt(Math.pow(canvas.width/2, 2) + Math.pow(canvas.height/2, 2)) 
  for (var i = 0; i < 18; i++) {
    context.moveTo(canvas.width/2, canvas.height/2)
    context.lineTo(p * Math.cos(Math.PI * 2 / 18 * i - 0.1) + canvas.width/2,
                    p * Math.sin(Math.PI * 2 / 18 * i - 0.1) + canvas.height/2)
    context.lineTo(p * Math.cos(Math.PI * 2 / 18 * i + 0.1) + canvas.width/2,
                    p * Math.sin(Math.PI * 2 / 18 * i + 0.1) + canvas.height/2)
    context.lineTo(canvas.width/2, canvas.height/2)
  }
  context.fill()
}

function makeSpiral() {
  context.fillStyle = "#0000ff"
  context.strokeStyle = "#0000ff"
  context.beginPath();
  r = 20;
  c = Math.sqrt(Math.pow(canvas.width/2, 2) + Math.pow(canvas.height/2, 2));
  for(i = 0; i < c / r; i++){
    p = (i+1) * r * Math.PI;
    for(j = 0; j < p; j++){
      x = (i * r + (r/p) * j) * Math.cos(Math.PI*2 / p * j) + canvas.width/2;
      y = (i * r + (r/p) * j) * Math.sin(Math.PI*2 / p * j) + canvas.height/2;
      context.moveTo(x, y);
      context.arc(x, y, 2, 0, Math.PI * 2);
    }
  }
  context.fill();
}

function makeWave() {
  context.fillStyle = "#0000ff"
  context.strokeStyle = "#0000ff"
  context.lineWidth = 1;
  for (var i = 0; i < canvas.width/20; i++) {
    for (var j = 0; j < canvas.height/20; j++) {
      var k = j % 2 ? -20 : 0
      context.beginPath();
      context.arc(i * 40 + k, j * 20, 20, 0, Math.PI /2, false)
      context.stroke()

      context.beginPath();
      context.arc(i * 40 + 40 + k, j * 20, 20, Math.PI, Math.PI /2, true)
      context.stroke()
    }
  }
}


function makeSinWave() {
  context.fillStyle = "#0000ff"
  context.strokeStyle = "#0000ff"
  context.lineWidth = 1;
  for (var j = 0; j < canvas.width/36; j++) {
    for (var k = 0; k < canvas.height/30; k++) {
      context.beginPath()
      for (var i = 0; i < 360; i++) {
          y = Math.sin(i * Math.PI / 180) * 10
          context.lineTo(i * 0.1 + j * 36, y + 10 + k * 30)
      }
          context.stroke()  
    }
  }
}