const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
const MORSE_TABLE_2 = {
  "00": "",
  10: ".",
  11: "-",
};
function decode(expr) {
  return expr
    .split("**********")
    .map((word) => {
      let newWord = [];
      for (let i = 0; i < word.length / 10; i++) {
        newWord[i] = `${+word.slice(i * 10, i * 10 + 10)}`;
      }
      return newWord
        .map((letter) => {
          let newLetter = [];
          for (let i = 0; i < letter.length / 2; i++) {
            newLetter[i] = MORSE_TABLE_2[`${+letter.slice(i * 2, i * 2 + 2)}`];
          }
          return MORSE_TABLE[`${newLetter.join("")}`];
        })
        .join("");
    })
    .join(" ");
}

module.exports = {
  decode,
};
