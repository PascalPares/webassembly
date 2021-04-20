const fs = require("fs");
let bytecode = fs.readFileSync('reverse.wasm');

const hello = "hello world!";

let run = async () => {
    try {
        let imports = { env: { mem: memory } };
        let wasm1 = await WebAssembly.instantiateStreaming(bytecode, imports);
        let wasm2Instance = new WebAssembly.Instance(wasm1.module, imports);
       
        let decoder = new TextDecoder();
        wasm1.instance.exports.reverse(hello.length);       
        let reverseString = decoder.decode(buffer); // Make a copy
        console.log("1", reverseString);
    
        wasm2Instance.exports.reverse(hello.length);
        reverseString = decoder.decode(buffer); // Make a copy
        console.log("2", reverseString);
    }   
    catch(e) {  
        console.error(e);
    }
 };

run().then();   
