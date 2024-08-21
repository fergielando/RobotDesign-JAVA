var amp;

//Voices that will work with button
var sampVoice1, sampVoice2, sampVoice3, sampVoice4, sampVoice5, sampVoice6, sampVoice7, sampVoice8, sampVoice9;

// All the sounds. 
function preload(){
   sampVoice1 = loadSound('audio (9).wav'); 
   sampVoice2 = loadSound('audio (1).wav'); 
   sampVoice3 = loadSound('audio (7).wav');
   sampVoice4 = loadSound('audio (4).wav'); 
   sampVoice5 = loadSound('audio (3).wav'); 
   sampVoice6 = loadSound('audio (8).wav'); 
   sampVoice7 = loadSound('audio (2).wav'); 
   sampVoice8 = loadSound('audio.wav'); 
   sampVoice9 = loadSound('Jingle Bell Rock- Lyrics.mp3'); 
}


function setup() {
  createCanvas(850, 800);
  rectMode(CENTER);
  
  amp = new p5.Amplitude();

  testButton = createButton("USE ANY OF THE NUMBER 1-9 TO MAKE MR.REALBOT SPEAK. 🤖🗣 ");
  testButton2 = createButton("PRESS 9 TO HEAR SOMETHING SPECIAL.🎄🥳 ")
  testButton1= createButton("PRESS 0 TO MAKE HIM STOP. 🛑 "); 

}

function draw() {
  background(50);
  
   robotFace(200,200); 
  
  var vol = amp.getLevel();
  var diam = map(vol, 0, 1, 50, 500); 
  ellipse(460, 650, diam, diam );
}
// The buttons that make the sound.
 function keyPressed(){
  if(key == '1'){
    sampVoice1.play();
    console.log('playing voice 1')
  }
  else if (key == '2'){
    sampVoice2.play();  
    console.log('playing voice 2');
  }
  else if (key == '3'){
    sampVoice3.play();  
    console.log('playing voice 3');
  }
   else if (key == '4'){
    sampVoice4.play();  
    console.log('playing voice 4');
  }
   else if (key == '5'){
    sampVoice5.play();  
    console.log('playing voice 5');
  }
   else if (key == '6'){
    sampVoice6.play();  
    console.log('playing voice 6');
  }
   else if (key == '7'){
    sampVoice7.play();  
    console.log('playing voice 7');
  }
   else if (key == '8'){
    sampVoice8.play();  
    console.log('playing voice 8');
  }
   else if (key == '9'){
    sampVoice9.play();  
    console.log('playing voice 9');
  }
   // stop all sounds
  else if(key == '0'){
    sampVoice1.stop();
    sampVoice2.stop();
    sampVoice3.stop();
    sampVoice4.stop();
    sampVoice5.stop();
    sampVoice6.stop();
    sampVoice7.stop();
    sampVoice8.stop();
    sampVoice9.stop(); 
    console.log('stopped');
  }
} 


function robotFace(x,y){
  
  // head
  stroke('black');
  strokeWeight(5);
  fill(245, 191, 42);
  rect(x+250,y+250, 620,650); 
  
  //Left Eye 
  fill( 'red'); 
  stroke('black');
  strokeWeight(6);
  ellipse( x+100, y+75, 100, 100);
  //Pupil
  fill('green')
  ellipse(x+100, y+75, 20, 20);
  
  //Right Eye
  fill( 'green ');
  stroke('black');
  strokeWeight(6);
  ellipse (x+400, y+75, 100, 100);
 //Right Pupil
  fill('red');
  ellipse(x+400, y+75, 20, 20);
  
  //Left Brows
  fill('green');
  rect(x+75,y-10,150,25);
  //Right Brow
  fill('red');
  rect(x+424, y-10, 150,25);
  
 //Nose
  fill('red');
  stroke('black');
  strokeWeight(9);
  ellipse ( x+260, y+250, 100, 100);
  
  //Left Ear Extension 
  stroke('black');
  strokeWeight(6);
  fill('green'); 
  rect(x-90, y+200, 50, 20) ;
  //Left Ear  
  stroke('black');
  fill('red'); 
  rect(x-125, y+200, 20, 50);
  
  //Right Ear Extension 
  stroke('black');
  fill('red'); 
  rect(x+590, y+200, 50, 20) ;
  //Right Ear 
  stroke('black');
  fill('green'); 
  rect(x+625, y+200, 20, 50);
  }
