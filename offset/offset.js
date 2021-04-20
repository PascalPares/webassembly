const fs = require("fs");
let bytecode = fs.readFileSync('offset.wasm');
    

let run = async () => {
    try {
        let wasm = await WebAssembly.instantiate(bytecode);
        let memory = await wasm.instance.exports.memory;
        let a = new Uint32Array(memory.buffer, 0, 3);
        let b = new Uint8Array(memory.buffer, 12, 6);
        let c = new Uint32Array(memory.buffer, 20, 2);

        console.log(a);
        console.log(new TextDecoder().decode(b));
        console.log(c);
    }
    catch (e) {
        console.error(e);
    }
};

run().then();