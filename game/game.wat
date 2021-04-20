(module
    (table (export "table") 4 anyfunc)
    (type $movefun (func (param i32)))
    (elem (i32.const 0) $moveToEast $moveToWest $moveToNorth $moveToSouth)
    (memory $0 1)
    (data (i32.const 0) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
    (export "memory" (memory $0))
    (export "moveToEast" (func $moveToEast))
    (export "moveToWest" (func $moveToWest))
    (export "moveToNorth" (func $moveToNorth))
    (export "moveToSouth" (func $moveToSouth))
    (export "gameLoop" (func $gameLoop))

    (func $moveToEast (param $0 i32)
        ;;; int offset
        (local $offset i32)
        (local.set $offset (i32.mul (get_local $0) (i32.const 8)))
        (i32.store (local.get $offset)
                   (i32.add (i32.load (local.get $offset))(i32.const 1))))

    (func $moveToWest (param $0 i32)
        ;;; int offset
        (local $offset i32)
        (local.set $offset (i32.mul (get_local $0) (i32.const 8)))
        (i32.store (local.get $offset)
                   (i32.sub (i32.load (local.get $offset))(i32.const 1))))

    (func $moveToNorth (param $0 i32)
        ;;; int offset
        (local $offset i32)
        (local.set $offset (i32.add (i32.mul (get_local $0) (i32.const 8)) (i32.const 4)))
        (i32.store (local.get $offset)
                   (i32.add (i32.load (local.get $offset)) (i32.const 1))))

    (func $moveToSouth (param $0 i32)
        ;;; int offset
        (local $offset i32)
        (local.set $offset (i32.add (i32.mul (get_local $0) (i32.const 8)) (i32.const 4)))
        (i32.store (local.get $offset)
                   (i32.sub (i32.load (local.get $offset)) (i32.const 1))))

    (func $gameLoop 
        (local $index i32)
        (set_local $index (i32.const 0))
        (loop $break
            (call_indirect (type $movefun) (get_local $index) (get_local $index))
            (set_local $index (i32.add (get_local $index) (i32.const 1)))
            (br_if $break (i32.ne (get_local $index (i32.const 4))))
        ))
)