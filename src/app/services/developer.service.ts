import { Injectable } from '@angular/core';
import { Developer } from '../models/developer';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  developers: Developer[] = []
  avgSalary: number = 0

  constructor(private http: HttpClient) {
    this.read()
  }

  create(developer: Developer): void {
    this.http.post(environment.apiDeveloper.create, developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Create request result: ", response)
        this.developers.push(developer)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Error message: ", error)
      }
    })
  }

  read(): void {
    this.http.get<Developer[]>(environment.apiDeveloper.read).subscribe(data => {
      this.developers = data.map(dev => Object.assign(new Developer(), dev))
    })
  }

  update(developer: Developer): void {
    this.http.put(environment.apiDeveloper.update, developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log(response)
        let index = this.developers.findIndex(x => x.id === developer.id)
        this.developers[index] = developer
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log(error)
      }
    })
  }

  delete(developer: Developer): void {
    this.http.delete(environment.apiDeveloper.delete, { body: { id: developer.id } })
      .subscribe({
        next: (response) => {
          console.log("::SUCCESS::")
          console.log(response)
          this.developers = this.developers.filter(x => x.id !== developer.id)
        },
        error: (error) => {
          console.log("::ERROR::")
          console.log(error)
        }
      })
  }

  getById(id: string): Developer | undefined {
    return this.developers.find(x => x.id === id)
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
