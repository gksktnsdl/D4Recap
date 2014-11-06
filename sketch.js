var bg;
var y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 710x400 pixels.
  bg = loadImage("space2.jpg");
  createCanvas(600, 600);
}

function draw() {
   background(bg);
   fill(216,54,74);
   noStroke();
    ellipse(250,250,250,250);

   var duration = 3000;
   var timing = (new Date()%duration)/duration;
//지구
   fill(108,211,121);
   ellipse(250 + Math.cos(timing*2*PI)*300,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        50,                                     // width
        50);                                    // height

//원궤도
   var duration = 4000;
   var timing = (new Date()%duration)/duration;
   fill(185,237,86);
   ellipse(250 + Math.cos(timing*2*PI)*300,           // x좌표
        250 + Math.sin(timing*2*PI)*300,       // y좌표
        50,                                     // width
        50);                                    // height

    var duration = 1000;
   var timing = (new Date()%duration)/duration;
   fill(136,178,216);
   ellipse(250 + Math.cos(timing*2*PI)*300,           // x좌표
        250 + Math.sin(timing*2*PI)*300,       // y좌표
        50,                                     // width
        50);                                    // height



   

    //달
   var duration = 3000;
   var timing = (new Date()%duration)/duration;
    fill(237,237,86);
   ellipse(250 + Math.cos(timing*2*PI)*300+ Math.cos(timing*4*PI)*40,           // x좌표
     250 + Math.sin(timing*2*PI)*200+ Math.sin(timing*4*PI)*40,       // y좌표
        10,                                     // width
        10);                                    // height

 
}