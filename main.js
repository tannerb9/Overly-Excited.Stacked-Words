// If the current value of the counter variable can be evenly divided
// by 3 (using the JavaScript remainder operator) add a single exclamation
// point (!) to the current word in the array.

// If the current word's place (not index) in the array
// is evenly divisible by 3, add an exclamation point
// to the end of the word and then concatenate it to
// `buildMeUp`.

// Otherwise, just concatenate the word itself.

let sentence = [
  "The",
  "walrus",
  "danced",
  "through",
  "the",
  "trees",
  "in",
  "the",
  "light",
  "of",
  "the",
  "moon",
];

let word_counter = 1;

function addExcitement(theWordArray) {
  let buildMeUp = "";
  for (let i = 0; i < theWordArray.length; i++) {
    if (word_counter % 3 === 0) {
      buildMeUp += theWordArray[i] + "! ";
      word_counter++;
    } else {
      buildMeUp += theWordArray[i] + " ";
      word_counter++;
    }
    console.log(buildMeUp);
  }
}

addExcitement(sentence);
