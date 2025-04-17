import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import { RouterLink,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  constructor(private _lf: FormBuilder, private _auth:AuthService,
    private _router:Router
  ) { }


  ngOnInit(): void {
    this.loginForm = this._lf.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    })
  }


  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this._auth.login(loginData).subscribe(
        (response:any)=>{
          this._auth.setUserData(response);
          console.log('Login successful', response);
          Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Success!',
            text: 'You have logged in successfully.',
            showConfirmButton: false,
            timer: 3000,
            position: 'top-end'
          });
          window.location.reload();
          // this._router.navigate(['']);
        },
        (error:any)=>{
          Swal.fire({
            toast: true,
            icon: 'error',
            title: 'Failed!',
            text: 'Login failed. Please check your credentials.',
            showConfirmButton: false,
            timer: 3000,
            position: 'top-end'
          });
          console.error('Login failed', error);
        }

      )
    }

  }

}
