import Block from './Block';

class Blockchain {
    blocks: Array<Block>;

    constructor() {
        this.blocks = new Array<Block>();
        this.createGenesisBlock();
    }

    private createGenesisBlock() {
        const genesisBlock: Block = new Block(null, '0');
        genesisBlock.mineBlock();
        this.blocks.push(genesisBlock);
    }

    private getLastBlock(): Block {
        return this.blocks[this.blocks.length - 1];
    }

    public addBlock(newBlock: Block) {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.mineBlock();
        this.blocks.push(newBlock);
    }
}

export default Blockchain;
