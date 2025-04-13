import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }



  sendContactForm(formData: any) {
    return this.http.post(`${environments.api}/api/contactus/`, formData);
  }

}
