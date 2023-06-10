// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i/j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numeric = ['11', '21', '31', '41', '51', '12', '22', '32', '42', '52', '13', '23', '33', '43', '53', '14', '24', '34', '44', '54', '15', '25', '35', '45', '55'];
  const decoder = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i/j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function polybius(input, encode = true) {
    let output = [];
    let decoded = [];
    let lowerCode = input.toLowerCase();

    if (!encode) {
      const groupedString = lowerCode.match(/(?:[0-9]{2}|[\s\S])/g) || [];

      for (let i = 0; i < groupedString.length; i++) {
        let character = groupedString[i];

        if (character === ' ') {
          decoded.push(character);
          continue;
        }

        let numIndex = numeric.indexOf(character);

        if (numIndex >= 0) {
          decoded.push(decoder[numIndex]);
        } else {
          decoded.push(character);
        }
      }

      let finalDecoded = decoded.join("");
      return finalDecoded;
    } else {
      for (let j = 0; j < lowerCode.length; j++) {
        let character = lowerCode.charAt(j);

        if (character === ' ' || /[^\w\s]/.test(character)) {
          output.push(character);
          continue;
        }

        let alphaIndex = alphabet.indexOf(character);

        if (alphaIndex >= 0) {
          output.push(numeric[alphaIndex]);
        } else {
          output.push(character);
        }
      }

      let newOutput = output.join("");
      return newOutput;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
