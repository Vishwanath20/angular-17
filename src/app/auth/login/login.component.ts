import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  

  ngOnInit(): void {
   
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    console.log(this.loginForm.value)

    if( this.loginForm.value.email == "superadmin@admin.com" && this.loginForm.value.password == "super"){
      console.log("----------Welcome Super Admin-----------");
      localStorage.setItem('adminType', "superAdmin");
      this.router.navigate(['/', 'admin'])
    }
  }
}
