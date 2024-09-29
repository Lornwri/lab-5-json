let user = 
    {username: 'Natasha',  
    password: 'pizza',
    email:'natasha@natasha.com'};

console.log(user.username);
console.log(user['username']);

console.log(user.password);
console.log(user['password']);

console.log(user.email);
console.log(user['email']);

let whatProperty = 'password';
console.log(user[whatProperty]);

