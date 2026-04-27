import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { StatisticsService } from './statistics.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  dbString: string = "dev_DB"
  developers: Developer[] = []
  avgSalary: number = 0

  constructor(private http: HttpClient) {
    this.read()
  }

  create(developer: Developer): void {
    this.http.post("https://api.siposm.hu/createDeveloper", developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Create request result: ", response)
        // this.read() // újra letöltök minden elemet, amiben már a FRISSEN létrehozott objektum IS benne lesz
        this.developers.push(developer) // lokálisan IS hozzáadom a létrehozni kívánt elemet a tömbömhöz
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Error message: ", error)
      }
    })
  }

  createLocalStorage(developer: Developer): void {
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
    this.http.get<Developer[]>("https://api.siposm.hu/getDevelopers").subscribe(data => {
      this.developers = data.map(dev => Object.assign(new Developer(), dev))
      // data.map(dev => {
      //   this.developers.push(Object.assign(new Developer(), dev))
      // })
    })
  }

  private readLocalStorage(): void {
    let jsonArray = JSON.parse(localStorage.getItem(this.dbString) ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  private save(): void {
    localStorage.setItem(this.dbString, JSON.stringify(this.developers))
  }

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
