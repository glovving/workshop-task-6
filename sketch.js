//declaring font
let my_font;

//declaring input box, submit button, and clear button
let user_input;
let submit_input;
let clear_button;
let cleared = false;

//declaring user input saved text
let my_text;

//poem array and new sentence storing
let poem_array = [];
let new_words;

//declaring my background
let my_bg;

function preload(){
  //loading font
  my_font = loadFont('Resources/L.C._Smith_5_typewriter.ttf');
  //loading bg
  my_bg = loadImage('Resources/background_pic.jpg');

  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //resizing bg image
  my_bg.resize(windowWidth, windowHeight);

  background(my_bg);

  //setting up user input and button 
  user_input = createInput('');
  submit_input = createButton('enter');

   //input box coords and size
   let box_x = (windowWidth/4)/2;
   let box_y = windowHeight - (windowHeight/4) * 3;
   let box_width = windowWidth - (windowWidth/4) * 2;
 
   let button_space = user_input.height;
 
   //positioning input box and button
   user_input.size(box_width, 15);
   user_input.position(box_x, box_y)
   submit_input.position(box_x, box_y + 25);
  

  submit_input.mousePressed(() => {
    text_entered();})
  
  //writing button for clearing
  clear_button = createButton('clear');
  clear_button.position(box_x + submit_input.width + 5, box_y + 25);

  clear_button.mousePressed(
    () => {
      poem_array = [];
      background(220);
      write_poem();
      cleared = true;
    }
  )
  

  
 
}

function draw() {
  //background(220);
   write_poem();
   text_instr();

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}


function text_entered(){
  my_text = user_input.value();
  user_input.value('');

  let words_array = RiTa.tokenize(my_text);
  new_words = ''
  let word_count = 0;

  for(let x = 0; x< words_array.length; x++){
    word_count += 1;
    if(RiTa.isNoun(words_array[x])){
      new_words += RiTa.randomWord({pos: 'nn'})
      new_words += ' '
    }
    else{
      new_words += words_array[x];
      new_words += ' ';
    }}
  poem_array.push(new_words);
 
  let my_markov = RiTa.markov(2);
  my_markov.addText(my_text + ' ' + new_words);
    
  let markov_array = my_markov.generate(word_count);

  for(let i = 0; i< markov_array.length; i++){
    if(markov_array[i].length > word_count){
      poem_array.push(markov_array[i].split(' ').slice(0, 10).join(' '));
    }
    else{
    poem_array.push(markov_array[i]);}
  }
 

 


  }
 

function write_poem(){
  for(x = 0; x< poem_array.length; x++){
    textSize(windowWidth/60);
    textFont(my_font);
    let text_y = (windowHeight/4) + 75;

    text(poem_array[x], (windowWidth/4)/2, text_y + x * 30);
  }
 
}

function text_instr(){
  textSize(windowWidth/50);
  textFont(my_font);
  fill('black');
  if(!cleared){
    
    text("Enter your own sentence for a custom poem.\n\nClear to reset.", (windowWidth/4)/2, (windowHeight/8));
  }

}
