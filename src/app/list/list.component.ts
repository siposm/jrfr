import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { StatisticsService } from '../statistics.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  devId: string = ""

  constructor(public service: DeveloperService,
    public statService: StatisticsService,
    private http: HttpClient) { }

  demoApiCall(): void {
    this.http.get<Developer[]>("https://api.siposm.hu/getDevelopers").subscribe(data => {
      let devs = []
      devs = data.map(dev => Object.assign(new Developer(), dev))
      // console.log(devs[0].email)
      // TODO: developer class kiegészítése
      // TODO: service-be kiszervezni
      console.log(devs)
    })
  }

  get getAvgSalaryFromService() {
    return this.statService.averageSalary()
  }

  alertId(developer: Developer): void {
    this.devId = developer.id
    setTimeout(() => {
      this.devId = ""
    }, 5000)
  }
}
