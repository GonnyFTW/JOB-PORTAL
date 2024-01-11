import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = "";
  password = "";
  errorMsg1 = "";
  errorMsg2 = "";
  // Registration fields
  registerUsername = "";
  registerPassword = "";
  registrationSuccess = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    if (this.username.trim().length === 0 || this.password.trim().length === 0) {
      this.errorMsg1 = "Both username and password are required";
    } else {
      this.errorMsg1 = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      } else if (res === 403) {
        this.errorMsg1 = "Invalid Credentials";
      }
    }
  }

  register() {
    if (this.registerUsername.trim().length === 0 || this.registerPassword.trim().length === 0) {
      this.errorMsg2 = "Both username and password are required for registration";
    } else {
      this.errorMsg2 = "";
     
      this.auth.register(this.registerUsername, this.registerPassword);
      this.registrationSuccess = true;
     
      this.registerUsername = "";
      this.registerPassword = "";
    }
  }
}
