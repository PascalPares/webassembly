(module
  (func $i (import "env" "printNumber") (param i32))
  (func (export "echo") (param i32) local.get 0 call $i)
 )