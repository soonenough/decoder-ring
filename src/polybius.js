// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = ['a','b','c','d','e','f','g','h','i/j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  const numeric = ['11','21','31','41','51','12','22','32','42','52','13','23','33','43','53','14','24','34','44','54','15','25','35','45','55',' '];
  const decoder = ['a','b','c','d','e','f','g','h','i/j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];

  //iterate through input
  function polybius(input, encode = true) {
    //lowercase input
    let output = [];
    let decoded = [];
    let lowerCode = input.toLowerCase();
    let lowerCodeNoSpaces = lowerCode.replace(" ","  ");

    if(!encode === true){
      if(lowerCodeNoSpaces.length % 2 != 0){
        return false;
      }

      //split string by spaces
      const groupedString = lowerCodeNoSpaces.match(/.{1,2}/g) || [];

      //iterate through grouped array
      for(let i = 0; i < groupedString.length; i++){
        //translate numbers (numIndex) using index to alphabet (alphaIndex)
        let character = groupedString[i];
        let numIndex = numeric.indexOf(character);

        //push new characters to decoded array
        if(numIndex >= 0){
          decoded.push(decoder[numIndex]);
        } else {
          decoded.push(character);
        }
      }

      let finalDecoded = decoded.join("");
      return finalDecoded.replace(/\s\s/g, " ");
    } else {
      //encode
      for(let j = 0; j < lowerCode.length; j++){
        let character = lowerCode.charAt(j);
        let alphaIndex = alphabet.indexOf(character);
        if(alphaIndex >= 0){
          output.push(numeric[alphaIndex]);
        } else {
          output.push(character);
        }
      }
      let newOutput = output.join("");
      return newOutput.replace("j", 42);
    }
  }

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
