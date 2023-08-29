import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //email: string;
  //password: string;
  
 // login() {
  //  alert(`Email: ${this.email} Password: ${this.password.replace(/./g, '*')}`);
  //}

  cancel() {
    alert('Login canceled');
  }
}
