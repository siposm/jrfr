import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../../models/developer';
import { DeveloperService } from '../../services/developer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  developer: Developer | null = null

  constructor(private router: Router, public service: DeveloperService) { }

  delete(): void {
    this.service.delete(this.developer!)
    this.router.navigateByUrl("list")
  }
}
