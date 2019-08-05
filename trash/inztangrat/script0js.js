'use strict';

alert("This interface should only be viewed on mobile.");

console.log('reading js. feed me');

/* Captures the video camera and adds a filter
   Run local sever to see in Firefox
   */

var capture1;
var capture2;
var imageXY;
var yousernameHeight;
var feed;
// let fps = frameRate();

// use responsive for dimensions
var intViewportHeight = window.innerHeight;
console.log('intViewportHeight: ' + intViewportHeight);

// listens for different responsive dimensions
window.addEventListener('resize', function() {
  intViewportHeight = window.innerHeight;
  console.log('intViewportHeight: ' + intViewportHeight);
})

// stop function
var feedIsOffscreen = false;

function setup() {
  imageXY = 375;
  yousernameHeight = 32;
  feed = createCanvas(imageXY, intViewportHeight * 8);
  // create video capture
  capture1 = createCapture(VIDEO);
  // video capture size
  capture1.size(imageXY, imageXY);
  capture1.hide(); // remove comment to hide video
  // parent it to section id in html
  feed.parent('feed');
  frameRate(15);
  background(0, 0, 0, 0);
  // frameRate(15);

  // var myPost2 = createCanvas(imageXY, imageXY);

  // capture2 = createCapture(VIDEO);
  //
  // capture2.size(imageXY, imageXY);
  // capture2.hide();
  // myPost2.parent('myPost2');

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


// THE FOLLOWING CODE VIA P5.JS HHELP
// https://p5js.org/reference/#/p5.MediaElement/stop

//This example both starts
//and stops a sound sample
//when the user clicks the canvas

//We will store the p5.MediaElement
//object in here
// var ele;

//while our audio is playing,
//this will be set to true
// var sampleIsPlaying = false;

// function setup() {
  //Here we create a p5.MediaElement object
  //using the createAudio() function.
  // ele = createAudio('assets/beat.mp3');
  // background(200);
  // textAlign(CENTER);
  // text('Click to play!', width / 2, height / 2);
// }

function stopFeed() {
  //here we test if the mouse is over the
  //canvas element when it's clicked
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    background(200);

    if (feedIsOffscreen) {
      //if the sample is currently playing
      //calling the stop() function on
      //our p5.MediaElement will stop
      //it and reset its current
      //time to 0 (i.e. it will start
      //at the beginning the next time
      //you play it)
      feed.stop();

      feedIsOffscreen = false;
      // text('Click to play!', width / 2, height / 2);
    } else {
      //loop our sound element until we
      //call ele.stop() on it.
      feed.loop();

      feedIsOffscreen = true;
      // text('Click to stop!', width / 2, height / 2);
    }
  }
}


//try next time
