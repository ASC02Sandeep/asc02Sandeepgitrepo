// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../service/user.service';
// import { User } from '../model/user.model';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   registerForm!: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private userService: UserService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.registerForm = this.fb.group({
//       name: ['', Validators.required],
//       loginId: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       const newUser: User = this.registerForm.value;
//       this.userService.createUser(newUser).subscribe(
//         () => {
//           alert('Registration successful. You can now log in.');
//           this.router.navigate(['/login']);
//         },
//         (error) => {
//           console.error('Registration failed', error);
//         }
//       );
//     }
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder, private router: Router) {
//     this.registerForm = this.formBuilder.group({
//       loginid: ['', Validators.required],
//       password: ['', Validators.required],
//       name: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       const newUser = this.registerForm.value;
//       // Store user credentials in localStorage
//       const users = JSON.parse(localStorage.getItem('users') || '[]');
//       users.push(newUser);
//       localStorage.setItem('users', JSON.stringify(users));

//       alert("Registration successful. You can now log in.");
//       this.router.navigate(['/login']);
//     }
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      loginid: ['', [Validators.required, Validators.minLength(4)]],  // Login ID minimum length validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password minimum length validation
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]] // Name must contain only letters and spaces
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    // Stop if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Save user details
    const newUser = this.registerForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful. You can now log in.");
    this.router.navigate(['/login']);
  }
}





