import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  constructor(private _lf: FormBuilder, private _signupService: SignUpService) { }


  ngOnInit(): void {
    this.loginForm = this._lf.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    })
  }


  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      const user = this._signupService.getUserByCredentials(loginData.email, loginData.password)
      if (user) {
        user.isLoggedIn = true
        this._signupService.updateLoginStatus(user.email, user.isLoggedIn)
        alert("Login is working")
        alert(JSON.stringify(user));
      } else {
        alert("Login is not working")
      }
    }

  }

}
