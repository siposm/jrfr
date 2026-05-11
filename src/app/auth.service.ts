import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login-model';
import { TokenModel } from './token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenKey: string = "auth-token"

  constructor(private http: HttpClient, private router: Router) { }

  login(loginModel: LoginModel): void {
    this.http.post<TokenModel>("https://api.siposm.hu/login", loginModel).subscribe({
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
    localStorage.setItem(this.tokenKey, token)
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey)
    this.router.navigateByUrl("login") // TODO: jó helyen van-e ez???
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem(this.tokenKey) ?? "").length > 10
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
