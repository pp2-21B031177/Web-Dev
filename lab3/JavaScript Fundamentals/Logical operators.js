alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1 and 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 and undefined
alert( null || 2 && 3 || 4 ); // 3

let age = 25;
if(age >= 14 && age <= 90) alert("correct!1");
if(age < 14 || age > 90) alert("correct!2");
if(!(age >= 14 && age <= 90)) alert("correct3");

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
// first and third

let login = prompt('login');
if(login == "Admin") {
	let password = prompt('password');
	if(password == "TheMaster") {
		alert("Welcome!");
	}
	else if(password == '' || password == null) {
		alert("Canceled");
	}
	else {
		alert("Wrong password");
	}
}
else if(login == '' || login == null) {
	alert("Canceled");
}
else {
	alert("I don't know you");
}