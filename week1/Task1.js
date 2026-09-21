function helperCalculator(a, b) {
  function isValid() {
    return Number.isFinite(a) && Number.isFinite(b);
  }
  function add() {
    if (!isValid()) {
      return "INPUT INVALID";
    }
    return a + b;
  }
  function sub() {
    if (!isValid()) {
      return "INPUT INVALID";
    }
    return a - b;
  }
  function mul() {
    if (!isValid()) {
      return "INPUT INVALID";
    }
    return a * b;
  }
  function div() {
    if (!isValid() || b === 0) {
      return "INPUT INVALID";
    }
    return a / b;
  }
  return { add, sub, mul, div };
}
