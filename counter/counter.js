
const fs = require("fs");

let run = async () => {
    try {
        let counter = new WebAssembly.Global({ value:'i32', mutable:true }, 0);
        let bytecode = fs.readFileSync("counter.wasm");
        let wasm = await WebAssembly.instantiate(bytecode, { env: { "counter": counter } });
        wasm.instance.exports.inc(); 
        wasm.instance.exports.inc(); 
        console.log("Counter value is", counter.value);
    }   
    catch(e) {  
        console.error(e);
    }
 };

run().then();