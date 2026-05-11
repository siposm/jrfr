import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login-model';
import { TokenModel } from './token-model';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(loginModel: LoginModel): void {
    this.http.post<TokenModel>(environment.apiLogin, loginModel).subscribe({
      next: response => {
        console.log(response)
        this.saveToken(response.token)
        this.router.navigateByUrl("list")
      },
      error: error => {
        console.log(error)
      }
    })
  }

  logout(): void {
    this.removeToken()
  }

  saveToken(token: string): void {
    localStorage.setItem(environment.authTokenKey, token)
  }

  removeToken(): void {
    localStorage.removeItem(environment.authTokenKey)
    this.router.navigateByUrl("login")
  }

  getToken(): string {
    return (localStorage.getItem(environment.authTokenKey) ?? "")
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem(environment.authTokenKey) ?? "").length > 10
  }

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true
    }
    else {
      this.router.navigateByUrl("login")
      return false
    }
  }
}
