function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
function min(a, b) {
  return (a <= b) a : b;
}
function pow(a, b) {
  let result = 1;
  for(let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

let x = prompt("x = ?");
let n = prompt("n = ?");
if(n < 0) {
  alert("Negative power is not allowed!");
}
else {
  alert(pow(x, n));
}