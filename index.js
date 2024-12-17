const Block = require('./block');
const bloco1 = new Block();
const bloco2 = new Block(1, 'segundo bloco', '02/02/2022', bloco1.hash);
bloco2.amount = 1000
console.log(bloco1, bloco2);

console.log(bloco2.transferValues(bloco1.hash, 500));


