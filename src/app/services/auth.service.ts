// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api,geminiApi } from '../env/env.js'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private token = localStorage.getItem('token');
  userData: any;

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(`${api}/login`, { email: user.email, password: user.password },
      // {headers:{Authorization:`Bearer ${this.token}`}}
    )
  }


  register(
    username: string,
    email: string,
    password: string,
  ) {
    return this.http.post(`${api}/register`, { username, email, password })
  }



   setUserData(data:any){
    localStorage.setItem('user',JSON.stringify(data.user));
    localStorage.setItem('token',data.token);

   }
   getUserData(){
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;

   }
  getToken(){
    return localStorage.getItem('token');
  }

  // chatAnswer(questions:any){
  //   return this.http.post(`${api}/chatbot`,{"message":questions}
  //   // {headers:{Authorization:`Bearer ${this.token}`}}
  //   )

  // }




  chatAnswer(questions: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Ensures the body is sent as JSON
    });

    // Replace `GEMINI_API_KEY` with your actual Gemini API Key
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: questions, // The question you want to send to Gemini
            },
          ],
        },
      ],
    };

    // Send POST request to Gemini API
    return this.http.post(apiUrl, requestBody, {
      headers,
      params: {
        key:geminiApi , // Replace with your actual API key
      },
    }).pipe(
      map((response: any) => {
        return response.candidates[0].content.parts[0].text;
      })
    )
  }
}
