if ("0") {
  alert( 'Hello' );
}
// non-empty string returns true

let answer = prompt('What is the “official” name of JavaScript?');
if(answer == 'ECMAScript') alert("Right!");
else alert('You don’t know? ECMAScript!');

let val = prompt('Type a number: ');
if(val > 0) alert(1);
else if(val < 0) alert(-1);
else alert(0);

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' : 
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : '';