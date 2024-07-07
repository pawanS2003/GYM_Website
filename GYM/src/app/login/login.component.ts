import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule // Ensure HttpClientModule is imported here
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit, OnInit {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  @ViewChild('form', { static: true }) form: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.form?.form?.markAllAsTouched();
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post("http://localhost:9992/student/login", loginData).subscribe(
        (resultData: any) => {
          console.log(resultData);
          if (resultData.status) {
            this.router.navigate(['/']);
            alert("Login Successfully");
          } else {
            alert("Incorrect Email or Password");
            this.snackBar.open('Invalid email or password!', 'close', { duration: 3000 });
          }
        },
        (error) => {
          console.error("Error during login:", error);
          alert("Login failed");
        }
      );
    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'close', { duration: 3000 });
    }
  }

  register() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;

      this.http.post("http://localhost:9992/student/create", registerData).subscribe(
        (resultData: any) => {
          console.log(resultData);
          if (resultData.status) {
            alert("Student Registration successful");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
            this.router.navigate(['/login']);
          } else {
            alert(resultData.message);
            this.snackBar.open('Please fill in all fields correctly!', 'close', { duration: 3000 });
          }
        },
        (error) => {
          console.error("Error during registration:", error);
          alert("Registration failed");
        }
      );
    } else {
      alert('All fields are required.');
    }
  }
}
