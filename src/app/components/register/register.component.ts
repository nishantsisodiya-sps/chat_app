import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  showPass : boolean = true

  @ViewChild('loginPasswordInput', { static: false }) loginPasswordInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private renderer: Renderer2,
  ) {
    this.registerForm = formBuilder.group({
      username: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let data = this.registerForm.value;

    this.http
      .post<{ message: string; token: string; success: boolean }>(
        'http://localhost:9001/user/auth/register',
        data
      )
      .subscribe(
        (response) => {
          if (response.success) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
            this._snackBar.open(response.message, 'Close', {
              duration: 3000,
              panelClass: 'my-custom-snackbar',
            });
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


  togglePassword(passwordInput: HTMLInputElement): void {
    const type = this.showPass ? 'password' : 'text';
    this.renderer.setProperty(passwordInput, 'type', type);
    this.showPass = !this.showPass;
  }
}
