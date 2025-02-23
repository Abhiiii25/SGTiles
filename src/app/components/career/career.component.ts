import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

  jobs = [
    { title: "Sales Executive", adShor: "Pune MH", shortDes: "promote products, asist Customers, and meets sales goals,", reqdes: "5+ years in sales management, strong leadership skills." },
    { title: "Sales Executive", adShor: "Pune MH", shortDes: "promote products, asist Customers, and meets sales goals,", reqdes: "2+ years slaes experience, tiles industry knowledge preferred." },
    { title: "Receptionist", adShor: "Pune MH", shortDes: "Handle front desk operations, calls, and administrative tasks.", reqdes: "Proficient in MS Office, excellent communication skills." },
    { title: "Helper", adShor: "Pune MH", shortDes: "Support with loading/unloading and warehouse tasks.", reqdes: "Physically fit, hardworking, and team-oriented." },
    { title: "Driver", adShor: "Pune MH", shortDes: "Ensure timely deliveries and maintain vehicle condition.", reqdes: "Valid driver's license, clean record, and route knowledge." },
  ]

}
