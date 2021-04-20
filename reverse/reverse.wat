(module
    (memory (import "env" "mem") 1)
  
    ;;;;; void reverse (int len) {
    (func (export "reverse") (param $len i32) 

    ;;;;; int start;
    (local $start i32)
  
    ;;;;; int end;
    (local $end i32)

    ;;;;; int code;
    (local $code i32)

    ;;;;; start = 0
    ;;;;; end = len - 1;
    (local.set $start (i32.const 0))
    (local.set $end (i32.sub (local.get $len) (i32.const 1)))
    
    ;;;;; while (true) {
    (block $break (loop $top

        ;;;;; if (start >= end) break;
        (br_if $break (i32.ge_u (local.get $start) (local.get $end)))

        ;;;;; code = mem[start];
        (local.set $code (i32.load8_u (local.get $start)))

        ;;;;; mem[start] = mem[end]
        (i32.store8 (local.get $start) (i32.load8_u (local.get $end)))

        ;;;;; mem[end] = code;
        (i32.store8 (local.get $end) (local.get $code))

        ;;;;; start = start + 1;
        ;;;;; end = end - 1;
        (local.set $start (i32.add (local.get $start) (i32.const 1)))
        (local.set $end (i32.sub (local.get $end) (i32.const 1)))

    ;;;;; } /* end while */
    (br $top)
    ))
    ;;;;; } /* end reverse */
  )
)

