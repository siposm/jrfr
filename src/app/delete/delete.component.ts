import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  developer: Developer = new Developer()

  constructor(private router: Router, public service: DeveloperService) { }

  delete(): void {
    this.service.developers = this.service.developers.filter(x => x.id !== this.developer.id)
    this.service.save()
    this.router.navigateByUrl("list")
  }
}
