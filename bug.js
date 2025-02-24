function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(10, 0)); // Stack overflow error