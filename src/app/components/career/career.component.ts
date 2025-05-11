import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusService } from '../../services/contactus.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-career',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {


  constructor(private _contactService: ContactusService) { }

  jobs = [
    { title: "Sales Executive", adShor: "Pune MH", shortDes: "promote products, asist Customers, and meets sales goals,", reqdes: "5+ years in sales management, strong leadership skills." },
    { title: "Sales Executive", adShor: "Pune MH", shortDes: "promote products, asist Customers, and meets sales goals,", reqdes: "2+ years slaes experience, tiles industry knowledge preferred." },
    { title: "Receptionist", adShor: "Pune MH", shortDes: "Handle front desk operations, calls, and administrative tasks.", reqdes: "Proficient in MS Office, excellent communication skills." },
    { title: "Helper", adShor: "Pune MH", shortDes: "Support with loading/unloading and warehouse tasks.", reqdes: "Physically fit, hardworking, and team-oriented." },
    { title: "Driver", adShor: "Pune MH", shortDes: "Ensure timely deliveries and maintain vehicle condition.", reqdes: "Valid driver's license, clean record, and route knowledge." },
  ]




  isModalOpen = false;
  selectedJob: any = null;

  openModal(job: any) {
    this.selectedJob = job;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedJob = null;
  }

  submitApplication(event: Event, job: any) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const experience = (form.elements.namedItem('experience') as HTMLInputElement).value;
    const joining = (form.elements.namedItem('joining') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const formData = {
      jobTitle: job.title,
      name,
      email,
      phone,
      experience,
      joining,
      message,
    }



    this._contactService.sendJobApplication(formData).subscribe({
      next: (response) => {
        console.log('Application submitted successfully', response);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Application submitted successfully!',
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error: (error) => {
        console.error('Error submitting application', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error submitting your application. Please try again later.',
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500
        });
      }

    })

    this.closeModal();
  }

}
