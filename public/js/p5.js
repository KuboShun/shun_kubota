function setup(){
  var myCanvas = createCanvas(710, 400, WEBGL);
  myCanvas.parent('p5_canvas');
}

function draw(){
  background(255);
  rotateY(frameCount * 0.01);

  for(var j = 0; j < 5; j++){
  push();

    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      torus(8,6)
//      sphere(8, 6, 4); 
      pop();
    }
    pop();
  }

  //  translate(-250 * 2.5, 0, 0);
  //  normalMaterial();

  translate(0, 0, 125);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //  torus(radius,tubeRadius,[detailX],[detailY])
  torus(80, 20);
  pop();

}
