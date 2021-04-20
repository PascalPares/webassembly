const fs = require("fs");

let run = async () => {
    try {
        let bytecode = fs.readFileSync("echo.wasm");
        let imports = {
            env: {
                printNumber: (arg) => { console.log(arg); }
            }
        };    
        
        let wasm = await WebAssembly.instantiate(bytecode, imports);
        wasm.instance.exports.echo(2021); // output is 2021
    }   
    catch(e) {  
        console.error(e);
    }
 };

run().then();