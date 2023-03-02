let i1 = 3;

while (i1) {
  alert( i1-- );
}
// answer: 3, 2 and lastly 1

let i2 = 0;
while (++i2 < 5) alert( i2 ); // 1, 2, 3, 4

let i3 = 0;
while (i3++ < 5) alert( i3 ); // 1, 2, 3, 4, 5

for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

for(let i = 2; i <= 10; i += 2) alert(i);

let i4 = 0;
while(i4 < 3) {
  alert(`number ${i4}!`);
  i4++;
}

while(true) {
  let number = prompt("Any value greater than 100");
  if(number > 100 || number == null || number == undefined || number == '') break;
}

let n = prompt("n = ?");
outer: for(let i = 2; i <= n; i++) {
  for(let j = 2; j < i; j++) {
    if(j % i == 0) continue outer;
  }
  alert(i);
}