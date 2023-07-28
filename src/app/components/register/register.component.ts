import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup

  constructor(private formBuilder : FormBuilder) {

    this.registerForm = formBuilder.group({
      username : ['' , [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)]],
      password : ['' , [Validators.required]],
    })

   }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.registerForm.value);
  }

}
