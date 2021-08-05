console.log("Hello , Wooooooooooooooooooooooooorld................................................")

let message;
let login = '';
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

/*Rewrite the code*/

login == 'Employee' ?
  message = 'Hello':
    login == 'Director' ?
  message = 'Greetings':
    login == ''?
  message = 'No login':
  message = '';


console.log(message)