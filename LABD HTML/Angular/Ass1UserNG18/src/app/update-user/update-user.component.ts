import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateForm!: FormGroup;  // Use definite assignment assertion (!)
  user!: User;  // Use definite assignment assertion (!)

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Get user ID from route params
    const userId = +this.route.snapshot.paramMap.get('id')!;

    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (user: User) => {
          this.user = user;
          this.updateForm.patchValue(user);
        },
        error => {
          console.error('User not found', error);
        }
      );
    }

    // Initialize the form with validations
    this.updateForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      degree: ['', Validators.required],
      gender: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const updatedUser = this.updateForm.value;
      this.userService.updateUser(updatedUser.id, updatedUser).subscribe(
        (user) => {
          this.router.navigate(['/list-users']);
        },
        (error) => {
          console.error('Update failed', error);
        }
      );
    }
  }
}
