import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { DeveloperService } from './developer.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  dbString: string = "dev_DB"
  // developers: Developer[] = []

  constructor(private service: DeveloperService) { }

  get developers(): Developer[] {
    return this.service.developers
  }

  averageSalary(): number {
    if (this.developers.length === 0) return 0

    let sum = this.developers.map(x => x.salary!).reduce((a, b) => a + b, 0)
    let avg = sum / this.developers.length
    return Math.round(avg)
  }

  oldestDeveloper(): Developer | null {
    if (this.developers.length === 0) return null

    return this.developers.reduce((a, b) => a.age! < b.age! ? b : a)
  }

  highestEarning(): Developer | null {
    if (this.developers.length === 0) return null

    return this.developers.reduce((a, b) => a.salary! < b.salary! ? b : a)
  }

  lowestEarning(): Developer | null {
    if (this.developers.length === 0) return null

    return this.developers.reduce((a, b) => a.salary! < b.salary! ? a : b)
  }

  mostSkilled(): Developer | null {
    if (this.developers.length === 0) return null

    return [...this.developers].sort((a, b) => b.skills.length - a.skills.length)[0]
  }
}
