import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  singupForm!: FormGroup;

  constructor(private _sf: FormBuilder, private _signupService: SignUpService) { }
  newUserId: number = 101;
  ngOnInit(): void {
    this.singupForm = this._sf.group({
      id: [],
      fname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      isLoggedIn: [false]
    })
  }


  onSignup() {
    if (this.singupForm.valid) {
      const formData = this.singupForm.value;

      const newUser = {
        id: 0,
        firstName: formData.fname,
        lastName: formData.lname,
        email: formData.email,
        password: formData.password,
        isLoggedIn: formData.isLoggedIn
      }
      this._signupService.addUser(newUser);
      this.singupForm.reset();
      alert("User Created Successfully!!");
      console.log("User Created Successfully!!");
    } else {
      console.log("Form is invalid");
    }
  }
}
