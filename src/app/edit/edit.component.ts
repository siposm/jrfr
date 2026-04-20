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
  developer: Developer = new Developer()

  constructor(private router: Router, public service: DeveloperService) { }

  update(): void {
    let idx = this.service.developers.findIndex(x => x.id === this.developer.id)
    this.service.developers[idx] = this.developer

    this.service.save()

    this.router.navigateByUrl("list")
  }
}
