(module
   (global $counter (import "env" "counter") (mut i32))
   (func (export "inc") (global.set $counter (i32.add (global.get $counter) (i32.const 1))))
)
