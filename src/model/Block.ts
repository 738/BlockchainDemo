import * as crypto from 'crypto-js';

import BlockHeader from './BlockHeader';
import Transaction from './Transaction';

class Block {
    
    blockHeader: BlockHeader;
    transactions: Array<Transaction>;
    previousHash: string;
    hash: string;

    constructor(transactions: Array<Transaction>, previousHash?: string) {
        this.blockHeader = new BlockHeader();
        this.transactions = transactions;
        if(previousHash) this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    public calculateHash(): string {
        return crypto.SHA256(this.blockHeader.getString() + this.previousHash + JSON.stringify(this.transactions)).toString();
    }

    public mineBlock() {
        const nBits = this.blockHeader.nBits;
        while(this.hash.substring(0, nBits) !== Array(nBits + 1).join('0')) {
            this.blockHeader.nonce ++;
            this.hash = this.calculateHash();
        }
    }
}

export default Block;
