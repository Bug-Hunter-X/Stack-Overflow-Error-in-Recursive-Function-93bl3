function foo(a, b) {
  if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid Input"; 
  }
  while (a < b) {
    a++;
  }
  return a === b;
}

console.log(foo(10, 0)); // true
console.log(foo(0,10)); // false
console.log(foo(10,10));// true
console.log(foo(-1,1)); //Invalid Input
console.log(foo(1,"a")); //Invalid Input