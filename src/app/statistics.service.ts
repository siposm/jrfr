import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { DeveloperService } from './developer.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  dbString: string = "dev_DB"
  developers: Developer[] = []
  avgSalary: number = 0

  constructor(private service: DeveloperService) {
    this.developers = service.developers
  }

  averageSalary(): number {
    let sum = this.developers.map(x => x.salary!).reduce((a, b) => a + b)
    let avg = sum / this.developers.length
    this.avgSalary = avg
    return Math.round(avg)
  }

  oldestDeveloper(): Developer {
    return this.developers.reduce((a, b) => a.age! < b.age! ? b : a)
  }

  highestEarning(): Developer {
    return this.developers.reduce((a, b) => a.salary! < b.salary! ? b : a)
  }

  lowestEarning(): Developer {
    return this.developers.reduce((a, b) => a.salary! < b.salary! ? a : b)
  }

  mostSkilled(): Developer {
    return [...this.developers].sort((a, b) => b.skills.length - a.skills.length)[0]
  }
}
