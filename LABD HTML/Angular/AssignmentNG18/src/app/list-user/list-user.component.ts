import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userData) => {
      this.users = userData;
    });
  }

  deleteEmployee(toDeleteEmployee: User): void {
    if (toDeleteEmployee.id !== undefined) { // Ensure the ID is defined
      this.userService.deleteUser(toDeleteEmployee.id).subscribe((response) => {
        // Filter out the deleted user from the list
        this.users = this.users.filter(user => user.id !== toDeleteEmployee.id);
      });
    }
  }
  

  updateUser(userId: number | undefined): void {
    if (userId !== undefined) {
      this.router.navigate(['update', userId]);
    } else {
      console.log("User ID is undefined");
    }
  }
  
}

