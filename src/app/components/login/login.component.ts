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
  rememberMe: boolean = false;

  constructor(private formBuilder : FormBuilder , private router : Router) { 

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)]],
      password : ['' , [Validators.required]],
      rememberMe: [false] 
    });

  }

  ngOnInit(): void {
  }

  onSubmit(){
    let data = this.loginForm.value
    if(data.email == 'hello@gmail.com' && data.password == '123456' ){
      this.router.navigate(['/home'])
    }else{
      alert('Please enter correct details')
    }
  }

}
