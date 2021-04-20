;;int a[3] = { 1, 2, 3 };
;;char b[6] = { 'A', 'B', 'C', 'D', 'E', 'F' };
;;int c[2] = { 4, 5 };

(module
 (memory $0 1)
 (data (i32.const 0) "\01\00\00\00\02\00\00\00\03\00\00\00")
 (data (i32.const 12) "ABCDEF")
 (data (i32.const 20) "\04\00\00\00\05\00\00\00")
 (export "memory" (memory $0))
)
