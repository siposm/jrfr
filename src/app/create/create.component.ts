import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  developer: Developer = new Developer()

  constructor(private router: Router, private service: DeveloperService) { }

  buttonDisabled(): boolean {
    if(this.developer.name.length < 5) return true
    if(this.developer.job.length < 5) return true
    if(this.developer.age! < 18) return true
    if(this.developer.salary! < 50000) return true
    return false
  }

  create(): void {
    this.service.developers.push(this.developer)
    this.service.save()
    this.router.navigateByUrl("list")
  }
}
