# workshop-task-6
# User input and text
Link to completed website -> (https://glovving.github.io/workshop-task-6/)
## Goals for this workshop
- Create an interactive nonsense poem generator using the rita.js library.
- Use at least three different functions from the rita.js library to process the user's input.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Notes and Planning
Here are some notes I took during the workshop tutorial (right), before I began coding my website I also did a simple sketch in my notebook of what I wanted it to do and look like (left).

<img src="Documentation/note1.jpg" alt="Notes" width="300"><img src="Documentation/plan_sketch.jpg" alt="Notes" width="300">

I planned to use the code that Leo showed us to tokenise then swap out the nouns (RiTa.tokenize(), RiTa.isNoun()) of an inputted sentence with a random word, then use the RiTa.markov function to generate a number of new lines.

<img src="Documentation/leos_code.png" alt="Notes" width="300"><img src="Documentation/Ri_markov_page.png" alt="Notes" width="300">

## Building website
### Testing font
I started with downloading and testing some fonts from the internet, I used a website called dafont (https://www.dafont.com/) to source my fonts.

<img src="Documentation/dafont.png" alt="Notes" width="300"><img src="Documentation/hammer_keys_page.png" alt="Notes" width="300"><img src="Documentation/lc_smith_page.png" alt="Notes" width="300">


I then loaded them on my p5.js vscode environment and tried them out, the first one I tried - the h'ammer keys font had an error where each line would print twice, once in capital letters and then in block letters, I did't want this so I chose to use the L.C. Smith 5 font.

<img src="Documentation/testing_font.png" alt="Notes" width="300">

The hammer keys problem ^


### User Input
To recieve user input I created a text input box and submit button, once the user inputs text and presses the submit button the input box is cleared and the inputted string is stored in as a string.

<img src="Documentation/userinput_and_pressed.png" alt="Notes" width="300">

I added a mousePressed() function to my submit button which calls my text proccessing function.

### Text Proccessing and Markov Problems

For the first part of my text processing function I used the code that Leo showed us during the demonstration to create and array of words, then swap out the nouns with a random word, I then pushed the new string into an array.
I decided to do this because I wanted to keep the basic structure of the user input and also some new sentences.

<img src="Documentation/text_proccess_1.png" alt="Notes" width="300">

Next I started implementing my markov chain function, which is where I had a lot of trouble.
I didn't quite understand the documentation (https://rednoise.org/rita/#reference) so I didn't know that the generated markov element was an array rather than a single string so I was pushing a long array into my poem_array, which only printed on the screen sometimes.

<img src="Documentation/markov_function_stringtype.png" alt="Notes" width="300">

I was stuck on this for a while until I tested if the returned element was an array using the Array.isArray(elem.) function.

I also had troubl trying to set the length of each sentence the markov functon generated, I was under the impression that entering a value into the .generate() function would set a specific word count but after many tests and attempted fixes I found that whatever number I inputted it generated a much longer sentence.

<img src="Documentation/string_lengths_test.png" alt="Notes" width="300">

To test I printed every length throughout my for loop going through the markov array.

As an easy fix I just used an if statement to catch any long strings and sliced them before pushing them onto my poem array.

<img src="Documentation/save_slice.png" alt="Notes" width="300">

### Printing Poem

For printing my poem I used the same code that Leo showed, my write_poem function is called inside the draw function and uses a for loop to print every string inside my poem_array.

<img src="Documentation/printing_poem_func.png" alt="Notes" width="300">

### Adding Extra functionality and Final website
After my basic website was completed I added instructional text instructions on how to use the website.

<img src="Documentation/extra_text.png" alt="Notes" width="300"><img src="Documentation/extra_text_onscreen.png" alt="Notes" width="300">

And an extra 'clear' button for resetting the canvas, upon pressing the clear button the poem_array is set to an empty array and the background is redrawn to clear the text.

Here is an example of what a final poem looks like and what happens when the screen is cleared.

<img src="Documentation/final_input.png" alt="Notes" width="300"><img src="Documentation/final_result.png" alt="Notes" width="300"><img src="Documentation/final_cleared.png" alt="Notes" width="300">

## Reflection and How I would expand this sketch

I think my biggest lesson from this workshop was to fully understand new functions before trying to implement them, I spent a lot of time tring to fix my markov generated sentences without even double checking the data types, doing this would have helped me save a lot of time and effort.

I think I would expand this sketch by adding some different outcome scenarios based on the users input, for example an idea I had was to have a different background based on the length of the string provided by the user. 








