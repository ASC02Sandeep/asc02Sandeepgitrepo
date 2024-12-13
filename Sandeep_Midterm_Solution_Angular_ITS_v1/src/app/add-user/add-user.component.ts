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
    
    this.addUserForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      assignee: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      const newIssue = this.addUserForm.value; 
      this.userService.createUser(newIssue).subscribe(  
        (user) => {
          this.router.navigate(['/list-users']);
        },
        (error) => {
          console.error('Add issue failed', error);
        }
      );
    }
  }
}
