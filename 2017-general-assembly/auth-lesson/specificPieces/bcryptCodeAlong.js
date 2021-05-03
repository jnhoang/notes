var bcrypt = require('bcrypt');
var password = 'test';
var wrongPass = 'nope';


// test hashing the password
var hash = bcrypt.hashSync(password, 10);
console.log('this is the value after hash is called:');
console.log(hash);
console.log('---------------------------------------')


// test comparing the password to the correct password
var isValid = bcrypt.compareSync(password, hash); // 1st param is user typed, 2nd is db
console.log('user typed in password:', password, 'and this was', isValid.toString());
console.log('---------------------------------------')


// test comparing the password to the wrong password
var isValid2 = bcrypt.compareSync(wrongPass, hash);
console.log('user typed in password:', wrongPass, 'and this was', isValid2.toString());


// will always 