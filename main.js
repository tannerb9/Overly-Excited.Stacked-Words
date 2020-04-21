// Create an addExcitement function that should console.log() rows of words. It
// should take an array containing the words of a sentence and output them in the developer console.

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

function addExcitement() {
  let full_sentence = "";
  for (let word of sentence) {
    full_sentence += word + " ";
    if (word === "moon") {
      sentence.push("...");
    }
    console.log(full_sentence);
  }
}

addExcitement(sentence);
