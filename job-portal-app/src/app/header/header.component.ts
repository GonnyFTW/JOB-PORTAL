import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  showNotifications() {
    
    this.router.navigate(['/notification']);
  }

  showAboutUs() {
    this.router.navigate(['/about-us']);
  }


  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

  }
  goToHome() {
    this.router.navigate(['home']);

  }

  logout() {
    this.auth.logout();

  }

}

