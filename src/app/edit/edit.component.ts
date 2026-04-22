import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  developerForSelect: Developer | null = null
  developerToEdit: Developer = new Developer()
  developers: Developer[] = []

  constructor(private router: Router, public service: DeveloperService) {
    this.developers = service.developers.map(x => Object.assign(new Developer(), x))
  }

  update(): void {
    this.service.update(this.developerToEdit!)
    this.router.navigateByUrl("list")
  }

  trigger(): void {
    this.developerToEdit = Object.assign(new Developer(), this.developerForSelect!)
  }
}