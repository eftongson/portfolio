'use strict';

alert("This interface should only be viewed on mobile.");

console.log('reading js. feed me');

var feed;

var capture1;
var capture2;
var imageDimensions;
var yousernameHeight;

//while our audio is playing,
//this will be set to true
// var sampleIsPlaying = false;
var canvasIsDrawing = false;

function setup() {
  imageDimensions = 375;
  yousernameHeight = 36;

  frameRate(2);

    feed = createCanvas(imageDimensions, window.innerHeight * 8);
    background(0,0,0,0);


    var feed = createCanvas(imageDimensions, window.innerHeight * 8);
    // create video capture
    capture1 = createCapture(VIDEO);
    // video capture size
    capture1.size(imageDimensions, imageDimensions);
    capture1.hide(); // remove comment to hide video
    // parent it to section id in html
    feed.parent('feed');
    background(0, 0, 0, 0);

}



function draw() {


  image(capture1, 0, 4800 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 4000 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 3200 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 2400 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 1600 + yousernameHeight, 640, 480);
  filter('DILATE'); // change filters: THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.

  image(capture1, 0, 800 + yousernameHeight, 640, 480);
  filter('DILATE');


  image(capture1, 0, 0 + yousernameHeight, 640, 480);
  filter('ERODE');


}
