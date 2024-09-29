let user = {
    name: 'Natasha',
    password: 'Pizza',
    email: 'natasha@dreamjob.com',
    roles: ['developer', 'programmer'],
    contact: {
        phone: '5555554123'
    }
}

user.salary = 56495
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)