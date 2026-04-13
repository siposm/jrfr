import { Component } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  developers: Developer[] = []

  constructor() {
    this.seed()
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
