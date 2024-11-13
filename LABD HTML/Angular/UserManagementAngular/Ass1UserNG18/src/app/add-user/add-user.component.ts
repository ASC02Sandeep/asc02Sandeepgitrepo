import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialize the form with validations
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      degree: ['', Validators.required],
      gender: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      const newUser: User = this.addUserForm.value;
      this.userService.createUser(newUser).subscribe(
        (user) => {
          this.router.navigate(['/list-users']);
        },
        (error) => {
          console.error('Add user failed', error);
        }
      );
    }
  }
}
