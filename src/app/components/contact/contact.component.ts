import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm!: FormGroup;

  constructor(private _cf: FormBuilder) { }

  currentId: number = 1;

  ngOnInit(): void {
    this.contactForm = this._cf.group({
      id: [],
      fullname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required, Validators.minLength(10)])]
    })
  }

  contacted() {
    this.contactForm.patchValue({
      id: this.currentId++
    });
    console.log(this.contactForm.value);
    console.log(this.contactForm.valid);
  }
}
