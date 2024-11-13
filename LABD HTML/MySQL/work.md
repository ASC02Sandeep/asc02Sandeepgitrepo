
Register.component.ts
<!-- 1 import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public router: Router) { // Make router public
    this.registerForm = this.formBuilder.group({
      loginid: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onRegister() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Registration logic here (e.g., saving user details, etc.)

    // Redirect to login after registration
    this.router.navigate(['/login']);
  }
} -->

Register.component.html
<!-- <h4 class="text-center mb-4">Register</h4>

<form [formGroup]="registerForm" (ngSubmit)="onRegister()" class="p-4 shadow rounded" style="width: 100%; max-width: 400px; margin: auto;">
  <div class="mb-3">
    <label for="loginid" class="form-label">Login ID</label>
    <input type="text" id="loginid" formControlName="loginid" class="form-control" placeholder="Enter login ID">
    <div *ngIf="submitted && f['loginid'].errors" class="text-danger">
      <small *ngIf="f['loginid'].errors['required']">Login ID is required.</small>
      <small *ngIf="f['loginid'].errors['minlength']">Login ID must be at least 4 characters.</small>
    </div>
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" id="password" formControlName="password" class="form-control" placeholder="Enter password">
    <div *ngIf="submitted && f['password'].errors" class="text-danger">
      <small *ngIf="f['password'].errors['required']">Password is required.</small>
      <small *ngIf="f['password'].errors['minlength']">Password must be at least 6 characters.</small>
    </div>
  </div>

  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" id="name" formControlName="name" class="form-control" placeholder="Enter your name">
    <div *ngIf="submitted && f['name'].errors" class="text-danger">
      <small *ngIf="f['name'].errors['required']">Name is required.</small>
      <small *ngIf="f['name'].errors['pattern']">Name must only contain letters and spaces.</small>
    </div>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" formControlName="email" class="form-control" placeholder="Enter your email">
    <div *ngIf="submitted && f['email'].errors" class="text-danger">
      <small *ngIf="f['email'].errors['required']">Email is required.</small>
      <small *ngIf="f['email'].errors['email']">Please enter a valid email address.</small>
    </div>
  </div>

  <div class="mb-3">
    <label for="phone" class="form-label">Phone</label>
    <input type="text" id="phone" formControlName="phone" class="form-control" placeholder="Enter your phone number">
    <div *ngIf="submitted && f['phone'].errors" class="text-danger">
      <small *ngIf="f['phone'].errors['required']">Phone number is required.</small>
      <small *ngIf="f['phone'].errors['pattern']">Phone number must be exactly 10 digits.</small>
    </div>
  </div>

  <button type="submit" class="btn btn-primary w-100 mt-3">Register</button>
  <button type="button" class="btn btn-secondary w-100 mt-2" (click)="router.navigate(['/login'])">Back to Login</button>
</form> -->

