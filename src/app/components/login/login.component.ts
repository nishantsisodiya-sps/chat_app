import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  showPass : boolean = true


  @ViewChild('SignupPasswordInput', { static: false }) loginPasswordInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private token: TokenService,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private renderer: Renderer2,
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

  onSubmit() {
    let data = this.loginForm.value;
    this.http
      .post<{ success: boolean; token: string; message: string }>(
        'http://localhost:9001/user/auth/login',
        { email: data.email, password: data.password }
      )
      .subscribe(
        (response) => {
          if (response.success) {
            localStorage.setItem('token', response.token);
            this._snackBar.open(response.message, 'Close', {
              panelClass: 'my-custom-snackbar',
              duration: 3000,
            });
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          console.log(error);
          this._snackBar.open(error.error.message, 'Close', {
            duration: 3000,
            panelClass: 'my-custom-snackbar',
          });
        }
      );
  }

  // onSubmit(){
  //   this.router.navigate(['/home'])
  // }


  togglePassword(passwordInput: HTMLInputElement): void {
    const type = this.showPass ? 'password' : 'text';
    this.renderer.setProperty(passwordInput, 'type', type);
    this.showPass = !this.showPass;
  }

}
