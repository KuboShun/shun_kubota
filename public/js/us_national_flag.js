createStar("star_base_canvas",20,15,10,"#ffffff");

function createStar(selector,x,y,r,color){
  //五芒星の時の角度
  var c1 = createCordinate(r,-90);
  var c2 = createCordinate(r,-234);
  var c3 = createCordinate(r,-18);
  var c4 = createCordinate(r,-162);
  var c5 = createCordinate(r,-306);

  var canvas = document.getElementsByClassName(selector)[0];
  var context = canvas.getContext('2d');
  context.fillStyle = color;
  context.lineWidth = 0;

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j <= 5; j++){
      x_position = i * 52;
      y_position = j * 30;
      context.beginPath();
      context.moveTo(x + x_position,y-r + y_position);
      context.lineTo(c1.x + x + x_position, c1.y + y + y_position); //top
      context.lineTo(c2.x + x + x_position, c2.y + y + y_position); //left lower
      context.lineTo(c3.x + x + x_position, c3.y + y + y_position); //rgiht upper
      context.lineTo(c4.x + x + x_position, c4.y + y + y_position); //left upper
      context.lineTo(c5.x + x + x_position, c5.y + y + y_position); //right lower
      context.closePath();
      context.fill();
      //context.stroke();
    }
  }
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++){
      x_position = i * 52 + 24.6;
      y_position = j * 30 + 15;
      context.beginPath();
      context.moveTo(x + x_position,y-r + y_position);
      context.lineTo(c1.x + x + x_position, c1.y + y + y_position); //top
      context.lineTo(c2.x + x + x_position, c2.y + y + y_position); //left lower
      context.lineTo(c3.x + x + x_position, c3.y + y + y_position); //rgiht upper
      context.lineTo(c4.x + x + x_position, c4.y + y + y_position); //left upper
      context.lineTo(c5.x + x + x_position, c5.y + y + y_position); //right lower
      context.closePath();
      context.fill();
      //context.stroke();
    }
  }
    
  function createCordinate(r,angle){
    var x = r * Math.cos(angle / 180 * Math.PI);
    var y = r * Math.sin(angle / 180 * Math.PI);
    return {
      "x" : x,
      "y" : y
    };
  }
}


/*
makeBackground();

function makeBackground(){
  var canvas = document.getElementsByClassName("star_base_canvas")[0];
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  var z_index = -1000;
  var x,y = 0;
  var size = 10;

  canvas.style.zIndex   = z_index;

  for (var i = 0; i <= 6; i++) {
    for (var j = 0; j <= 5; j++){
      x_position = i * 44;
      y_position = j * 30;
      ctx.beginPath();
      ctx.arc(x_position + 16.5 , y_position + 14, size, 0, 2*Math.PI, false);
      ctx.fill();
    }
  }

  for (var i = 0; i <= 5; i++) {
    for (var j = 0; j < 4; j++){
      x_position = i * 44;
      y_position = j * 30;
      ctx.beginPath();
      ctx.arc(x_position + 16.5 + 22 , y_position + 14 + 15, size, 0, 2*Math.PI, false);
      ctx.fill();
    }
  }
}

*/