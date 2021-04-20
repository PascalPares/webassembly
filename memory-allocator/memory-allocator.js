
class MemoryAllocator {
  
    constructor(buffer) {
        this.buffer = buffer;
        this.offset = 0;
    }
    
    allocUint32Array (len) {
        // Align the offset on 32 bits integers
        let int32Offset = Math.ceil(this.offset / Uint32Array.BYTES_PER_ELEMENT); 

        let beginOffset = int32Offset * Uint32Array.BYTES_PER_ELEMENT;
        let endOffset = (int32Offset + len) * Uint32Array.BYTES_PER_ELEMENT;

        let subArray = new Uint32Array(this.buffer, beginOffset, len);
        this.offset = endOffset;
        return subArray.fill(0);
    }

    allocUint8Array (len) {
        let subArray = new Uint8Array(this.buffer, this.offset, len);
        this.offset += len;
        return subArray.fill(0);
    }
}

try {
    let memory = new WebAssembly.Memory( { initial: 1 } );
            
    let allocator = new MemoryAllocator(memory.buffer);   

    // Allocate and initialize: int a[3] = { 1, 2, 3 };
    let a = allocator.allocUint32Array(3);
    a.set([1,2,3]);

    // Allocate and initialize: char b[6] = { 'A', 'B', 'C', 'D', 'E', 'F' };
    let b = allocator.allocUint8Array(6);
    new TextEncoder().encodeInto("ABCDEF", b);
            
    // Allocate and initialize: int c[2] = { 4, 5 };
    let c = allocator.allocUint32Array(2);
    c.set([4, 5]);
            
    console.log(a);
    console.log(b, new TextDecoder().decode(b));
    console.log(c);
    
    // Example of a call to a Web Assembly module
    // wasm.exports.sumUint32(c.byteOffset, c.length)
}
catch (e) {
    console.log(e);
}