import { Component } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  developers: Developer[] = []
  devId: string = ""

  constructor() {
    this.read()
  }

  alertId(developer: Developer): void {
    this.devId = developer.id
    setTimeout(() => {
      this.devId = ""
    }, 5000)
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  seed(): void {
    let d = new Developer()
    d.name = "Gipsz Jakab"
    d.salary = 3450000
    d.job = "Frontend developer"
    this.developers.push(d)

    d = new Developer()
    d.name = "Jakabos Péter"
    d.salary = 255000
    d.job = "Frontend developer"
    this.developers.push(d)

    d = new Developer()
    d.name = "Ferencz Zsuzsanna"
    d.salary = 655000
    d.job = "Data analyst"
    this.developers.push(d)
  }
}
