console.log("Welcome to User Management");

import {UserManagement} from './userManagement';
import {User} from './users';
const userManagement = new UserManagement();
const user : User ={
    id:1,
    name: 'sandeep',
    email: 'abs@email',
    phone: 8373653334,
    age : 21,
    degree: 'btech',
    gender : 'male',
    address: 'bangalore',
    percentage:90,
    password : 'avafs'
};

userManagement.addUser(user);
let users: User[]=userManagement.listUsers();
console.log(users);

const user2: User ={
    id:2,
    name: 'uday',
    email: 'sss@email',
    phone: 6354374744,
    age : 23,
    degree: 'btech',
    gender : 'male',
    address: 'vizag',
    percentage:90,
    password : 'gsafsd'
};
userManagement.addUser(user2);
console.clear();
users=userManagement.listUsers();
console.log(users);

userManagement.removeUser(2);
users=userManagement.listUsers();
console.log(users);


console.log("search user by id")

userManagement.searchUser(1);
users=userManagement.listUsers();
console.log(users);

