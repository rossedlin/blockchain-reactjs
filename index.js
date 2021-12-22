const Block  = require('./src/Block');
const Chain  = require('./src/Chain');



let chain = new Chain();

chain.addNewBlock(new Block(1, Date.now(), {sender: 'Rabin Yitzack', recipient: 'Loyd Eve', quantity: 20}));
console.log(chain.checkValidity());
chain.addNewBlock(new Block(2, Date.now(), {sender: 'Anita Vyona', recipient: 'Felix Mush', quantity: 349}));
console.log(chain.checkValidity());

console.log(JSON.stringify(chain, null, 4));
