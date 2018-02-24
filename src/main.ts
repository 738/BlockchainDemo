import Blockchain from './model/Blockchain';
import Block from './model/Block';

let jicoin = new Blockchain();
console.log(JSON.stringify(jicoin.blocks[0], null, 4));

let t1 = {
    from: "Jon Jee",
    to: "Billy",
    amount: 30
}

let t2 = {
    from: "Jackson",
    to: "Jon Jee",
    amount: 50
}

let t3 = {
    from: "Jon Jee",
    to: "Dan",
    amount: 100
}

jicoin.addBlock(new Block([t1]));
console.log(JSON.stringify(jicoin.blocks[1], null, 4));

jicoin.addBlock(new Block([t2, t3]));
console.log(JSON.stringify(jicoin.blocks[2], null, 4));