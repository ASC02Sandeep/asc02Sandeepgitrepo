import {User} from './users';
export class UserManagement{
    private users : User[] = [];
    addUser(user : User):void{
        this.users.push(user);
    }

    listUsers():User[]{
        return this.users;
    }

    removeUser(id:number):void{
        this.users = this.users.filter(user => user.id !==id);
        console.log(`User with id ${id} removed successfully`);
    }

    searchUser(id:number):void{
        // this.users = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id ==id);
        console.log(`User with id ${id} searched successfully`);
        
    }
    
    
}