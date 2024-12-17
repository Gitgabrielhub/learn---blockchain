const sha256 = require('crypto-js/sha256');

module.exports = class Block{
    constructor(index=0,data = 'genesis block', timestamp, previousHash=null){
        this.index = index;
        this.data = data;
        this.amount = 0;
        this.timestamp = Date();
        this.hash = this.generateHash();
        this.previousHash = previousHash;
    }
    generateHash(){
        return sha256(this.index + this.timestamp + JSON.stringify(this.data),this.previousHash).toString();
    }
    transferValues(hash, valueTrans){
        if(this.amount > 0 && this.amount >= valueTrans){
            this.amount -= valueTrans;
            const newBlock = new Block(this.index, this.data, this.timestamp, hash);
            newBlock.amount = valueTrans;
            return newBlock;
        }else{
            return 'not enough funds';
        }
    }
}