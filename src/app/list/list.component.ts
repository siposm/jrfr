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
  avgSalary: number = 0

  constructor() {
    this.read()
  }

  averageSalary(): number {
    let sum = this.developers.map(x => x.salary!).reduce((a, b) => a + b)
    let avg = sum / this.developers.length
    this.avgSalary = avg
    return Math.round(avg)
  }

  oldestDeveloper(): Developer {
    return this.developers.reduce((a,b) => a.age! < b.age! ? b : a)
  }

  highestEarning(): Developer {
    return this.developers.reduce((a,b) => a.salary! < b.salary! ? b : a)
  }

  lowestEarning(): Developer {
    return this.developers.reduce((a,b) => a.salary! < b.salary! ? a : b)
  }

  mostSkilled(): Developer {
    return [...this.developers].sort((a,b) => b.skills.length - a.skills.length)[0]
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
