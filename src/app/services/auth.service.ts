// import { HttpClient } from '@angular/common/http';
import {environments } from '../environments/environments.js'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.token = localStorage.getItem('token') || '';
    }
  }

  login(user: any) {
    return this.http.post(`${environments.api}/api/auth/login`, {
      email: user.email,
      password: user.password
    }, {
      headers: { Authorization: `Bearer ${this.token}` }
    });
  }

  register(user: any) {
    return this.http.post(`${environments.api}/api/auth/signup`, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    });
  }

  setUserData(data: any) {
    if (this.isBrowser) {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      localStorage.setItem('isLoggedIn', 'true');
    }
  }

  getUserData() {
    if (this.isBrowser) {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  getToken() {
    if (this.isBrowser) {
      return localStorage.getItem('token');
    }
    return null;
  }
  isLoggedIn(): boolean {
    if (this.isBrowser) {
      const value = localStorage.getItem('isLoggedIn');
      return value === 'true'; // ensures it's a strict boolean
    }
    return false;
  }

  // isLoggedIn(){
  //   if (this.isBrowser) {

  //  const ss =localStorage.getItem('isLoggedIn');

  //  return ss ? JSON.parse(ss) : null;
  //   }
  // }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
    }
  }

  chatAnswer(questions: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: questions,
            },
          ],
        },
      ],
    };

    return this.http.post(apiUrl, requestBody, {
      headers,
      params: {
        key: environments.geminiApi,
      },
    }).pipe(
      map((response: any) => {
        return response.candidates[0].content.parts[0].text;
      })
    );
  }
}
