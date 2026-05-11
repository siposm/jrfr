import { Component } from '@angular/core';
import { Developer } from '../models/developer';
import { DeveloperService } from '../services/developer.service';
import { StatisticsService } from '../services/statistics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  devId: string = ""
  selectedSkill: string = ""
  developerDetails: Developer = new Developer()

  constructor(
    public devService: DeveloperService,
    public statService: StatisticsService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      if (param["skill"] !== undefined) {
        this.selectedSkill = param["skill"]
      }
    })
  }

  get getAvgSalaryFromService() {
    return this.statService.averageSalary()
  }

  filter(developers: Developer[]): Developer[] {
    if (this.selectedSkill !== "") {
      return this.devService.developers.filter(x => x.skills.includes(this.selectedSkill))
    }
    return developers
  }

  showDetails(developer: Developer): void {
    this.developerDetails = developer
  }

  getObjectKeysAndValues_ENG(): { key: string, value: string }[] {
    let lookupArray: { key: string, value: string }[] = [
      { key: "id", value: "ID" },
      { key: "name", value: "Name" },
      { key: "email", value: "E-mail" },
      { key: "job", value: "Job" },
      { key: "age", value: "Age" },
      { key: "salary", value: "Salary" },
      { key: "image", value: "Image URL" },
      { key: "skills", value: "List of skills" },
    ]

    return Object.keys(this.developerDetails).map(key => {
      let found = lookupArray.find(item => item.key === key)
      let displayName = found ? found.value : key
      let value = this.developerDetails[key as keyof Developer]
      return { key: displayName, value: String(value) }
    })
  }

  getObjectKeysAndValues_HU(): { key: string, value: string }[] {
    let lookupArray: { key: string, value: string }[] = [
      { key: "id", value: "Azonosító" },
      { key: "name", value: "Név" },
      { key: "email", value: "E-mail cím" },
      { key: "job", value: "Munkakör" },
      { key: "age", value: "Kor" },
      { key: "salary", value: "Fizetés (HUF)" },
      { key: "image", value: "Profilkép URL" },
      { key: "skills", value: "Kompetenciák" },
    ]

    return Object.keys(this.developerDetails).map(key => {
      let found = lookupArray.find(item => item.key === key)
      let displayName = found ? found.value : key
      let value = this.developerDetails[key as keyof Developer]
      return { key: displayName, value: String(value) }
    })
  }

  alertId(developer: Developer): void {
    this.devId = developer.id
    setTimeout(() => {
      this.devId = ""
    }, 5000)
  }
}
