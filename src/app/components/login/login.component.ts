import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  rememberMe: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private token: TokenService,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      password: ['', [Validators.required]],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {}

  // onSubmit() {
  //   let data = this.loginForm.value;
  //   this.http
  //     .post<{ success: boolean; token: string; message: string }>(
  //       'http://localhost:9001/user/auth/login',
  //       { email: data.email, password: data.password }
  //     )
  //     .subscribe(
  //       (response) => {
  //         if (response.success) {
  //           localStorage.setItem('token', response.token);
  //           this._snackBar.open(response.message, 'Close', {
  //             panelClass: 'my-custom-snackbar',
  //             duration: 3000,
  //           });
  //           this.router.navigate(['/home']);
  //         }
  //       },
  //       (error) => {
  //         this._snackBar.open(error.error.message, 'Close', {
  //           duration: 3000,
  //           panelClass: 'my-custom-snackbar',
  //         });
  //       }
      // );
      onSubmit(){
        this.router.navigate(['/home'])
      }
  }
// }
