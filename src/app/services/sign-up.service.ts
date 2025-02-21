import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private users: User[] = [];
  private locaStorageKey = 'users';

  constructor() {
    this.loadUsers();
  }

  addUser(user: User): void {
    const newUser: User = {
      id: this.generateUniqueId(),
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
      isLoggedIn: user.isLoggedIn
    }
    this.users.push(newUser);
    this.SaveUsers();
  }

  getUserByCredentials(email: string, password: string): User | null {
    const user = this.users.find(user => user.email == email && user.password == password);
    return user || null
  }

  updateLoginStatus(email: string, isLoggedIn: boolean): void {
    const user = this.users.find(user => user.email === email);
    if (user) {
      user.isLoggedIn = isLoggedIn
      this.SaveUsers();
    }
  }

  private SaveUsers(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.locaStorageKey, JSON.stringify(this.users));
    }
  }

  private loadUsers(): void {
    if (this.isLocalStorageAvailable()) {
      const storedUsers = localStorage.getItem(this.locaStorageKey);
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test'
      localStorage.setItem(testKey, testKey)
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }


  generateUniqueId(): number {
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 101; // Incremental ID
  }
}
