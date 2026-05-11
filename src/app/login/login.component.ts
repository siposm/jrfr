import { Component } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginModel: LoginModel = new LoginModel()

  constructor(public authService: AuthService) {}
}
