const fs = require("fs");
let bytecode = fs.readFileSync('sum.wasm');

let run = async () => {
    try {
        let memory = new WebAssembly.Memory( { initial: 1, maximum: 2 } );
        let numbers = new Uint32Array(memory.buffer); // Wrap the memory.buffer as an array of Unsigned Integers 
        for (var i = 0; i < 10; i++) {
          numbers[i] = i;
        }
        let wasm = await WebAssembly.instantiate(bytecode, { env: { mem: memory } });
        let sum = wasm.instance.exports.sum(10);
        console.log(sum); // Output is 45
    }   
    catch(e) {  
        console.error(e);
    }
 };

run().then();