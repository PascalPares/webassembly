const fs = require("fs");
let bytecode = fs.readFileSync('reverse.wasm');

const hello = "hello world!";

let run = async () => {
    try {
        let memory = new WebAssembly.Memory( { initial:1 } );
        let buffer = new Uint8Array(memory.buffer, 0, hello.length); // No copy
        let encoder = new TextEncoder();
        encoder.encodeInto(hello, buffer); // Make a copy

        let wasm = await WebAssembly.instantiate(bytecode, { env: { mem: memory } });

        wasm.instance.exports.reverse(hello.length); 
       
        let decoder = new TextDecoder();
        let reverseString = decoder.decode(buffer); // Make a copy
        console.log(reverseString); // Output is "!dlrow olleh"
    }   
    catch(e) {  
        console.error(e);
    }
 };

run().then();   


