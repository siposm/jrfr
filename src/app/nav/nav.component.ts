import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public authService: AuthService) {
    this.getTheme()
  }

  getTheme(): void {
    let currentTheme = localStorage.getItem("theme") ?? ""
    this.setTheme(currentTheme)
  }

  setTheme(theme: string): void {
    localStorage.setItem("theme", theme)
    document.body.setAttribute("data-bs-theme", theme)
  }

  themeSwitch(): void {
    let currentTheme = localStorage.getItem("theme")
    currentTheme === "light" ? this.setTheme("dark") : this.setTheme("light")
  }
}
