let message;
let login = prompt("Enter your designation");

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else {
    message = 'No login';
}

console.log(message);
