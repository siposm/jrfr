import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  developer: Developer = new Developer()
  developers: Developer[] = []

  constructor(private router: Router) {
    this.read()
    this.developer.name = "Select..."
    this.developers.unshift(this.developer)
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem("dev_DB", JSON.stringify(this.developers))
  }

  delete(): void {
    this.developers = this.developers.filter(x => x.id !== this.developer.id)
    this.save()
    this.router.navigateByUrl("list")
  }
}
