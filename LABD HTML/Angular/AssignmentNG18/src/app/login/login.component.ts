import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  // You can fetch users from your service here, for example, if you want dynamic login checks.
  users = [
    { loginid: 'teddy', password: 'pass' },
    // Add other users here as needed
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    console.log("LoginComponent constructor called");
  }

  ngOnInit() {
    console.log("LoginComponent ngOnInit called");
    this.loginForm = this.formBuilder.group({
      loginid: ['', Validators.required],  // Add validations
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    console.log(this.loginForm.value);
    const { loginid, password } = this.loginForm.value;

    // Check if the loginid and password match any user in your users array (or backend API)
    const user = this.users.find(u => u.loginid === loginid && u.password === password);

    if (user) {
      console.log("Login successful");
      sessionStorage.setItem("loggedIn", "yes");
      this.router.navigate(['/employees']);
    } else {
      console.log("Login failed");
    }
  }
}
