import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Here, you would replace this logic with an actual authentication check
    // For example, making an HTTP request to your backend
    if (username === 'test' && password === 'password') {
      console.log('Login successful');
      return true;
    } else {
      console.log('Login failed');
      return false;
    }
  }
}
