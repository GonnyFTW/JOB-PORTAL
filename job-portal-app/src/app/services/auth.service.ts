import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private registeredUsers: { username: string, password: string }[] = [];

  constructor(private router: Router) { }

  login(username: string, password: string): number {
    const user = this.registeredUsers.find(u => u.username === username && u.password === password);
    if (user) {
      return 200; 
    } else {
      return 403; 
    }
  }

  register(username: string, password: string): void {
    
    if (this.registeredUsers.some(u => u.username === username)) {
      console.error('Username already taken');
      return;
    }

    
    this.registeredUsers.push({ username, password });
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
