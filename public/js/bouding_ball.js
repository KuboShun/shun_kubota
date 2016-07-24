var ball = document.getElementById("bounding_ball")
    ,bh = ball.offsetHeight
    ,bw = ball.offsetWidth
    ,left = ( window.innerWidth / 2 ) - ( bw / 2 )
    ,topP = -ball.offsetHeight
    ,ground = ( window.innerHeight / 2 ) - ( bh / 2 );

ball.style.left = left + "px";
ball.style.top = topP + "px";

var y = topP
,v = 0
,R = 0.78;

function gravity() {
  y += ++v;
  if(y >= ground) {
    y = ground;
    // add minus direction.
    v *= -R;
    if (!~~v) {
      console.log("stop")
/*
      y = topP
      ,v = 0
      ,R = 0.78;
*/
      clearInterval(g)
    }
  }
  console.log(v)
  document.getElementById("bounding_ball").style.top = y + "px";
}

var g = setInterval(gravity, 10);

