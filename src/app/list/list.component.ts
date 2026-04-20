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

  constructor(public service: DeveloperService) { }

  get getAvgSalaryFromService() {
    return this.service.avgSalary
  }

  alertId(developer: Developer): void {
    this.devId = developer.id
    setTimeout(() => {
      this.devId = ""
    }, 5000)
  }
}
