import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactusService } from '../../services/contactus.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm!: FormGroup;

  constructor(private _cf: FormBuilder, private _contactus: ContactusService,
  ) { }

  currentId: number = 1;

  ngOnInit(): void {
    this.contactForm = this._cf.group({
      fullname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required, Validators.minLength(10)])]
    })
  }

  contacted() {
    const formData = {
      fullName: this.contactForm.value.fullname,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };
    this._contactus.sendContactForm(formData).subscribe({

      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Form submitted successfully!'
        });
        this.contactForm.reset(); // Reset the form after successful submission
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to submit the form. Please try again.'
        });
      }
    }
    )
  }
}
