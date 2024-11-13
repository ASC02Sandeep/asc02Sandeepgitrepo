// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder, private router: Router) {
//     console.log('LoginComponent constructor called');
//   }

//   ngOnInit() {
//     console.log('LoginComponent ngOnInit called');
//     this.loginForm = this.formBuilder.group({
//       loginid: ['teddy', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     console.log(this.loginForm.value);
//     const loginid: string = this.loginForm.get("loginid")?.value;
//     const password: string = this.loginForm.get("password")?.value;

//     if (loginid === "teddy" && password === "pass") {
//       console.log("Login successful");
//       sessionStorage.setItem("loggedIn", "yes");
//       this.router.navigate(["/list-users"]); // Navigate to list-users route after login
//     } else {
//       console.log("Login failed");
//     }
//   }

//   onRegister() {
//     this.router.navigate(['/register']); // Navigate to register page
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../service/user.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private userService: UserService
//   ) {
//     console.log('LoginComponent constructor called');
//   }

//   ngOnInit() {
//     console.log('LoginComponent ngOnInit called');
//     this.loginForm = this.formBuilder.group({
//       loginid: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     console.log(this.loginForm.value);
//     const loginid: string = this.loginForm.get("loginid")?.value;
//     const password: string = this.loginForm.get("password")?.value;

//     this.userService.getUsers().subscribe(users => {
//       const user = users.find(u => u.loginId === loginid && u.password === password);

//       if (user?.id) {
//         console.log("Login successful");
//         sessionStorage.setItem("loggedIn", "yes");
//         sessionStorage.setItem("userId", user.id.toString());
//         this.router.navigate(["/list-users"]); // Navigate to list-users route after login
//       } else {
//         console.log("Login failed");
//         alert("Invalid login ID or password");
//       }
//     });
//   }

//   onRegister() {
//     this.router.navigate(['/register']); // Navigate to register page
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const loginid: string = this.loginForm.get('loginid')?.value;
    const password: string = this.loginForm.get('password')?.value;

    // Retrieve stored users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some(
      (user: any) => user.loginid === loginid && user.password === password
    );

    if (userExists) {
      sessionStorage.setItem('loggedIn', 'yes');
      this.router.navigate(['/list-users']);
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
