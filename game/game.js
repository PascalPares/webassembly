var fs = require("fs");
var bytecode = fs.readFileSync('game.wasm');


let run = async () => {
    try  {
        let wasm = await WebAssembly.instantiate(bytecode);

        // The WASM module identifies 4 ships identified with an integer ID from 0 to 3
        // Thanks to the table of functions we set an initial direction for each ship
        let table = wasm.instance.exports.table;
        table.set(0,wasm.instance.exports.moveToEast);   // Ship  #0 moves to the East
        table.set(1,wasm.instance.exports.moveToWest);   // Ship  #1 moves to the West 
        table.set(2,wasm.instance.exports.moveToNorth);  // Ship  #2 moves to the North
        table.set(3,wasm.instance.exports.moveToSouth);  // Ship  #3 moves to the South

        // Move the ships for 2 cycles  
        let gameLoop = wasm.instance.exports.gameLoop;
        gameLoop();
        gameLoop();

        // Look at the current ships positions
        let positions = new Int32Array(wasm.instance.exports.memory.buffer)
        console.log("Ship #0 locate at (" + positions[0] + ", " + positions[1] +")");
        console.log("Ship #1 locate at (" + positions[2] + ", " + positions[3] +")");
        console.log("Ship #2 locate at (" + positions[4] + ", " + positions[5] +")");
        console.log("Ship #3 locate at (" + positions[6] + ", " + positions[7] +")");
    }
    catch (e) {
        console.error(e);        
    }
};

run().then();


