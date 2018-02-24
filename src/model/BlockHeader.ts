class BlockHeader {

    time: number;
    nBits: number;
    nonce: number;

    constructor() {
        this.time = new Date().getTime();
        this.nBits = 2;
        this.nonce = 0;
    }

    getString(): string {
        return String(this.time + this.nBits + this.nonce);
    }
}

export default BlockHeader;
