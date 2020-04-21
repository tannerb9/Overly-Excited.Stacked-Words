// Add a new argument to the function so that a developer can specify
// how many times the special character should be added.

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

function addExcitement(theWordArray, punctuation, reps) {
  let buildMeUp = "";
  for (let i = 0; i < theWordArray.length; i++) {
    if (word_counter % 3 === 0) {
      buildMeUp += theWordArray[i] + punctuation.repeat(reps) + " ";
      word_counter++;
    } else {
      buildMeUp += theWordArray[i] + " ";
      word_counter++;
    }
    console.log(buildMeUp);
  }
}

addExcitement(sentence, "*", 4);
