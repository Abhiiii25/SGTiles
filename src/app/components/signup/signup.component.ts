import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']  // Updated from styleUrl to styleUrls
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private _sf: FormBuilder,
    private _router:Router,
    private _auth: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this._sf.group({
      id: [],
      fname: ['', [Validators.required, Validators.minLength(2)]],
      lname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });

  }
  passwordMatchValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSignup(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      // Automatically generate a new user ID (if needed, you can replace it with proper logic)
      const newUser = {
        id: Math.floor(Math.random() * 1000) + 1, // Random ID for simplicity; you can improve this logic.
        firstName: formData.fname,
        lastName: formData.lname,
        email: formData.email,
        password: formData.password,
        isLoggedIn: formData.isLoggedIn
      };
      const user = {
        firstName: formData.fname,
        lastName: formData.lname,
        email: formData.email,
        password: formData.password,
      };
      console.log(user);
      this._auth.register(user).subscribe(
        (response) => {

          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Signed in successfully',
            showConfirmButton: false,
            timer: 3000
          });
          this._router.navigate(['/login']);
          console.log(response);
        },
        (error) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Error signing in',
            text: 'Please try again.',
            showConfirmButton: false,
            timer: 3000
          });
          console.log(error);
        }
      )
      // Reset the form after submission
      this.signupForm.reset();
      // alert("User Created Successfully!");
      console.log("User Created Successfully!");
    } else {
      console.log("Form is invalid.");
    }
  }
}
