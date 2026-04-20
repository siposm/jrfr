import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  dbString: string = "dev_DB"
  developers: Developer[] = []

  constructor() {
    this.read()
  }

  create(developer: Developer): void {
    this.developers.push(developer)
    this.save()
  }

  delete(developer: Developer): void {
    this.developers = this.developers.filter(x => x.id !== developer.id)
    this.save()
  }

  update(developer: Developer): void {
    let idx = this.developers.findIndex(x => x.id === developer.id)
    this.developers[idx] = developer
    this.save()
  }

  getById(id: string): Developer | undefined {
    return this.developers.find(x => x.id === id)
  }

  private read(): void {
    let jsonArray = JSON.parse(localStorage.getItem(this.dbString) ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  private save(): void {
    localStorage.setItem(this.dbString, JSON.stringify(this.developers))
  }

  // averageSalary(): number {
  //   let sum = this.developers.map(x => x.salary!).reduce((a, b) => a + b)
  //   let avg = sum / this.developers.length
  //   this.avgSalary = avg
  //   return Math.round(avg)
  // }

  // oldestDeveloper(): Developer {
  //   return this.developers.reduce((a,b) => a.age! < b.age! ? b : a)
  // }

  // highestEarning(): Developer {
  //   return this.developers.reduce((a,b) => a.salary! < b.salary! ? b : a)
  // }

  // lowestEarning(): Developer {
  //   return this.developers.reduce((a,b) => a.salary! < b.salary! ? a : b)
  // }

  // mostSkilled(): Developer {
  //   return [...this.developers].sort((a,b) => b.skills.length - a.skills.length)[0]
  // }

  private seed(): void {
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
