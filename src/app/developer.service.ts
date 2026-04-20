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

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem(this.dbString) ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem(this.dbString, JSON.stringify(this.developers))
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
