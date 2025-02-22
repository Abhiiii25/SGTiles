import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']  // Updated from styleUrl to styleUrls
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private _sf: FormBuilder, private _signupService: SignUpService) { }

  ngOnInit(): void {
    this.signupForm = this._sf.group({
      id: [],
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      isLoggedIn: [false]
    });
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

      // Call the service to add the user
      this._signupService.addUser(newUser);

      // Reset the form after submission
      this.signupForm.reset();
      alert("User Created Successfully!");
      console.log("User Created Successfully!");
    } else {
      console.log("Form is invalid.");
    }
  }
}


// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { SignUpService } from '../../services/sign-up.service';

// @Component({
//   selector: 'app-signup',
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {

//   singupForm!: FormGroup;

//   constructor(private _sf: FormBuilder, private _signupService: SignUpService) { }
//   newUserId: number = 101;
//   ngOnInit(): void {
//     this.singupForm = this._sf.group({
//       id: [],
//       fname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
//       lname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
//       password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
//       email: ['', Validators.compose([Validators.required, Validators.email])],
//       isLoggedIn: [false]
//     })
//   }


//   onSignup() {
//     if (this.singupForm.valid) {
//       const formData = this.singupForm.value;

//       const newUser = {
//         id: 0,
//         firstName: formData.fname,
//         lastName: formData.lname,
//         email: formData.email,
//         password: formData.password,
//         isLoggedIn: formData.isLoggedIn
//       }
//       this._signupService.addUser(newUser);
//       this.singupForm.reset();
//       alert("User Created Successfully!!");
//       console.log("User Created Successfully!!");
//     } else {
//       console.log("Form is invalid");
//     }
//   }
// }
