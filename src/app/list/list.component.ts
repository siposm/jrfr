import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  devId: string = ""
  avgSalary: number = 0

  constructor(public service: DeveloperService) { }

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

  alertId(developer: Developer): void {
    this.devId = developer.id
    setTimeout(() => {
      this.devId = ""
    }, 5000)
  }
}
