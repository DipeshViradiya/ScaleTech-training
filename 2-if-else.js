/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/

let login = prompt('Enter Login : ')

if(login == 'Admin'){
    let password = prompt('Enter Pass : ')
    password == 'TheMaster'?
        console.log('Welcome'):
    password ?
        console.log('Wrong...'):
    console.log('Canceled')

} else if (login){
    console.log('Canceled...')
} else {
    console.log('I don\'t even know you...')
}
