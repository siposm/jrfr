import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  developer: Developer = new Developer()
  developers: Developer[] = []

  constructor(private router: Router) {
    this.read()
  }

  update(): void {
    let idx = this.developers.findIndex(x => x.id === this.developer.id)
    this.developers[idx] = this.developer

    this.save()

    this.router.navigateByUrl("list")
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem("dev_DB", JSON.stringify(this.developers))
  }
}
