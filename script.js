var input, button, greeting, brainPart;
function setup() {
  
  createCanvas(604, 596);
  img = loadImage("limbic-system.JPG");
  
  responder = createElement('h2', "hello!");
  responder.position(550, 50);
  
  //hypothalamus
  input = createInput();
  input.position(40, 420);
  button = createButton('go');
  button.position(input.x + input.width, input.y);
  button.mousePressed(guessHypothalamus);
  
  //pituitary gland
  input2 = createInput();
  input2.position(100, 490);
  button2 = createButton('go');
  button2.position(input2.x + input2.width, input2.y);
  button2.mousePressed(guessPituitary);
  
  //amygdala
  input3 = createInput();
  input3.position(190, 540);
  button3 = createButton('go');
  button3.position(input3.x + input3.width, input3.y);
  button3.mousePressed(guessAmygdala);
  
  //hippocampus
  input4 = createInput();
  input4.position(480, 560);
  button4 = createButton('go');
  button4.position(input4.x + input4.width, input4.y);
  button4.mousePressed(guessHippocampus);
  
  
}

function draw() {
    background(img);
  
}

function guessHypothalamus() {
  
  var brainGuess = input.value();
  
  if (brainGuess == "hypothalamus")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input.value('');
  }
}

function guessPituitary() {
  
  var brainGuess = input2.value();
  
  if (brainGuess == "pituitary gland")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input2.value('');
  }
}

function guessAmygdala() {
  var brainGuess = input3.value();
  
  if (brainGuess == "amygdala")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input3.value('');
  }
}

function guessHippocampus() {
  var brainGuess = input4.value();
  
  if (brainGuess == "hippocampus")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input4.value('');
  }
}
