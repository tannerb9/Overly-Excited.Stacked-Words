// Add a new argument to the function so that a developer can specify which
// character should be displayed instead of it always being an exclamation point.

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

function addExcitement(theWordArray, punctuation) {
  let buildMeUp = "";
  for (let i = 0; i < theWordArray.length; i++) {
    if (word_counter % 3 === 0) {
      buildMeUp += theWordArray[i] + punctuation + " ";
      word_counter++;
    } else {
      buildMeUp += theWordArray[i] + " ";
      word_counter++;
    }
    console.log(buildMeUp);
  }
}

addExcitement(sentence, "?");
