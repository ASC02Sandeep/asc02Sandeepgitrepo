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
  updateForm!: FormGroup;  
  user!: User;  

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    
    const issueId = Number(this.route.snapshot.paramMap.get('id'));

    if (issueId) {
      this.userService.getUserById(issueId).subscribe(
        (user: User) => {
          this.user = user;
          this.updateForm.patchValue(user);
        },
        error => {
          console.error('Issue not found', error);
        }
      );
    }

   
    this.updateForm = this.fb.group({
      id: [{ value: null, disabled: true }, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      assignee: ['', Validators.required],
      date: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const updatedIssue = this.updateForm.getRawValue(); 
      this.userService.updateUser(updatedIssue.id, updatedIssue).subscribe(
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
