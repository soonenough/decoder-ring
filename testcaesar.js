const {caesar} = require ("./src/caesar");

const message = "zebra magazine";
const shift = 3;

const result = caesar(message, shift);

console.log(result);

const decrypt = caesar(result, shift, encode = false);

console.log(decrypt);