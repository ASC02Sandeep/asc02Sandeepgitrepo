import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  updateForm!: FormGroup;  // Declare the form group property

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with validations
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      // Handle form submission logic
      const newUser = this.updateForm.value;
      console.log(newUser); // For now, just log the user data

      // Navigate to another page or show success message
      this.router.navigate(['/home']);
    } else {
      console.log('Form is not valid');
    }
  }
}
