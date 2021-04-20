(module
    ;; int addInt(int left, int right) { return left + right; }
    (func (export "addInt32") (param i32) (param i32) (result i32) local.get 0 local.get 1 i32.add)
  
    ;; long long addLongLong(long long left, long long right) { return left + right; }
    (func (export "addInt64") (param i64) (param i64) (result i64) local.get 0 local.get 1 i64.add)

    ;; float addFloat(float left, float right) { return left + right; }
    (func (export "addFloat32") (param f32) (param f32) (result f32) local.get 0 local.get 1 f32.add)
  
    ;; double addDouble(double left, double right) { return left + right; }
    (func (export "addFloat64") (param f64) (param f64) (result f64) local.get 0 local.get 1 f64.add)
 )

