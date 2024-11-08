import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';  // Importing User model
import { UserService } from '../service/user.service';  // Importing UserService
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users!: User[];  // Array to hold list of users
  userService: UserService;  // Declare user service

  constructor(userService: UserService, private router: Router) {
    this.userService = userService;
  }

  ngOnInit(): void {
    // Fetch users from the service on component initialization
    if (!sessionStorage.getItem("loggedIn")) {
      this.router.navigate(["/login"]);  // Redirect to login if not logged in
    } else {
      this.userService.getUsers().subscribe((userData) => {
        this.users = userData;  // Populate users data
      });
    }
  }

  deleteUser(toDeleteUser: User): void {
    if (toDeleteUser.id !== undefined) {
      this.userService.deleteUser(toDeleteUser.id).subscribe(() => {
        // Remove deleted user from the list
        this.users = this.users.filter(user => user.id !== toDeleteUser.id);
      });
    }
  }

  updateUser(userId: number | undefined): void {
    if (userId !== undefined) {
      this.router.navigate(['update', userId]);  // Navigate to update page
    } else {
      console.log("User ID is undefined");
    }
  }
}
