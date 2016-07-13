  var canvas = document.getElementsByClassName("colored_pattern_canvas")[0]
  var ctx = canvas.getContext("2d")
  var speedX = 3.0;
  var speedY = 4.0;
  var locX = 200;
  var locY = 150;
  var ctx;
  var r, g, b;
  var rgb = [];

init()

function init(){

  canvas.width = 800;
  canvas.height = 400;


//     setInterval(draw,100)
     setInterval(drawK,100)

}

function draw() {
  ctx.globalAlpha = 0.3;
  //1000回処理をくりかえす
    for(i = 0; i < 1; i++){
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      ctx.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      ctx.beginPath();
      ctx.moveTo(Math.random()*800, Math.random()*400);
      ctx.lineTo(Math.random()*800, Math.random()*400);
      ctx.stroke();
  }

}

function drawK() {

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(8,8,12,1)";
  ctx.fillRect(0, 0, 800, 400);
  ctx.globalCompositeOperation = "lighter";

  for (var i = 0; i < 70; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgb[i] = 'rgb(' + r + ',' + g + ',' + b + ')';

    ctx.strokeStyle = rgb[i]

    // K1   100, 150
    ctx.beginPath()
    ctx.arc(Math.random() * 20 + 100, Math.random() * 120 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // K2
    ctx.beginPath()
    ctx.arc(i + 100 + Math.random() * 20, (-1) * i + 120 + Math.random() * 20, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // K3
    ctx.beginPath()
    ctx.arc(i * 0.5 + 130 + Math.random() * 20, i * 1.1 + 80 + Math.random() * 20, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();

    // U1 
    ctx.beginPath()
    ctx.arc(200 + Math.random() * 20, Math.random() * 100 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // U2
    ctx.beginPath()
    ctx.arc(210 + Math.random() * 60, Math.random() * 20 + 150, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // U3 
    ctx.beginPath()
    ctx.arc(260 + Math.random() * 20, Math.random() * 100 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();

    // B1 
    ctx.beginPath()
    ctx.arc(300 + Math.random() * 20, Math.random() * 120 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // B2
    ctx.beginPath()
    ctx.arc(360 + Math.random() * 20, Math.random() * 50 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // B3 
    ctx.beginPath()
    ctx.arc(370 + Math.random() * 20, Math.random() * 50 + 120, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // B4
    ctx.beginPath()
    ctx.arc(310 + Math.random() * 50, Math.random() * 20 + 50, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // B6
    ctx.beginPath()
    ctx.arc(310 + Math.random() * 60, Math.random() * 20 + 100, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // B7
    ctx.beginPath()
    ctx.arc(310 + Math.random() * 60, Math.random() * 20 + 150, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();

    // O1 
    ctx.beginPath()
    ctx.arc(400 + Math.random() * 20, Math.random() * 90 + 60, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // O2
    ctx.beginPath()
    ctx.arc(410 + Math.random() * 60, Math.random() * 20 + 50, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // O2
    ctx.beginPath()
    ctx.arc(410 + Math.random() * 60, Math.random() * 20 + 150, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // O3 
    ctx.beginPath()
    ctx.arc(460 + Math.random() * 20, Math.random() * 90 + 60, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();

    // T1 
    ctx.beginPath()
    ctx.arc(500 + Math.random() * 90, Math.random() * 20 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // T2
    ctx.beginPath()
    ctx.arc(540 + Math.random() * 20, Math.random() * 110 + 60, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();

    // A1 
    ctx.beginPath()
    ctx.arc(600 + Math.random() * 20, Math.random() * 120 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // A2
    ctx.beginPath()
    ctx.arc(660 + Math.random() * 20, Math.random() * 120 + 50, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // A4
    ctx.beginPath()
    ctx.arc(610 + Math.random() * 50, Math.random() * 20 + 50, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // A6
    ctx.beginPath()
    ctx.arc(610 + Math.random() * 60, Math.random() * 20 + 100, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();


    // S1 
    ctx.beginPath()
    ctx.arc(100 + Math.random() * 20, Math.random() * 60 + 250, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // S3 
    ctx.beginPath()
    ctx.arc(160 + Math.random() * 20, Math.random() * 50 + 320, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // S4
    ctx.beginPath()
    ctx.arc(110 + Math.random() * 50, Math.random() * 20 + 250, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // S6
    ctx.beginPath()
    ctx.arc(110 + Math.random() * 60, Math.random() * 20 + 300, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // S7
    ctx.beginPath()
    ctx.arc(110 + Math.random() * 60, Math.random() * 20 + 350, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();

    // H1 
    ctx.beginPath()
    ctx.arc(200 + Math.random() * 20, Math.random() * 120 + 250, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // H3 
    ctx.beginPath()
    ctx.arc(260 + Math.random() * 20, Math.random() * 120 + 250, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // H6
    ctx.beginPath()
    ctx.arc(210 + Math.random() * 60, Math.random() * 20 + 300, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();

    // U1 
    ctx.beginPath()
    ctx.arc(300 + Math.random() * 20, Math.random() * 100 + 250, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // U2
    ctx.beginPath()
    ctx.arc(310 + Math.random() * 60, Math.random() * 20 + 350, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();
    // U3 
    ctx.beginPath()
    ctx.arc(360 + Math.random() * 20, Math.random() * 100 + 250, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();

    // H1 
    ctx.beginPath()
    ctx.arc(400 + Math.random() * 20, Math.random() * 120 + 250, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // H3 
    ctx.beginPath()
    ctx.arc(470 + Math.random() * 20, Math.random() * 120 + 250, Math.random() * 4, 0, Math.PI*2.0, true);
    ctx.closePath()
    ctx.stroke();
    // H6
    ctx.beginPath()
    ctx.arc(i * 0.5 + 415 + Math.random() * 20, i * 1.2 + Math.random() * 20 + 250, Math.random() * 4, 0, Math.PI*2.0, true);    
    ctx.closePath()
    ctx.stroke();

  }

}

function drawBall(){
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(8,8,12,1)";
  ctx.fillRect(0, 0, 800, 400);
  ctx.globalCompositeOperation = "lighter";

  //位置を更新
  locX += speedX;
  locY += speedY;
  
  if(locX < 0 || locX > 800){
      speedX *= -1;
  }

  if(locY < 0 || locY > 400){
      speedY *= -1;
  }
  
  //更新した座標で円を描く
  ctx.beginPath();
      ctx.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      ctx.arc(locX, locY, 4, 0, Math.PI*2.0, true);
      ctx.stroke();
}
