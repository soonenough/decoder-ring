// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

  function caesar(input, shift, encode = true) {
    // your solution code here
    let output = [];
    if(shift === 0 || shift < -25 || shift > 25){
      return false;
    }

    shift *= encode ? 1 : -1; //if decoding message we need the shift to move in different direction.

    for (let i = 0; i < input.length; i++){
      //lower case all code
      let lowerCode = input.toLowerCase();
      //lookup the index value of the character
      let character = lowerCode.charAt(i);
      //find the substitute character
      let alphaIndex = alphabet.indexOf(character);
      if(alphaIndex >= 0){
        let outputIndex = shiftChar(alphaIndex, shift, encode);
        //add substitute character to output
        output.push(alphabet[outputIndex]);
      } else {
        output.push(character)
      }

    }
    return output.join("");
  }
  //if the index + the shift is greater than 25 then add the difference to 0 or if the index + the shift is less than 0 then subtract the difference from 25.
  function shiftChar(index, shift, encode){
    let shiftedIndex = index + shift;
    if(shiftedIndex > 25){
      return shiftedIndex += -26;
    } 
    if (shiftedIndex < 0){
    return shiftedIndex += 26;
    }
    return shiftedIndex;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
