import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    console.log('LoginComponent constructor called');
  }

  ngOnInit() {
    console.log('LoginComponent ngOnInit called');
    this.loginForm = this.formBuilder.group({
      loginid: ['teddy'],
      password: ['']
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const loginid: string = this.loginForm.get("loginid")?.value;
    const password: string = this.loginForm.get("password")?.value;

    if (loginid === "teddy" && password === "pass") {
        console.log("Login successful");
        sessionStorage.setItem("loggedIn", "yes");
        this.router.navigate(["/list-users"]); // Navigate to list-users route after login
    } else {
        console.log("Login failed");
    }
}
}

