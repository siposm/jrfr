import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrl: './edit2.component.css'
})
export class Edit2Component {
  developer: Developer = new Developer()

  constructor(private route: ActivatedRoute, private router: Router, private service: DeveloperService) {
    route.params.subscribe(x => {
      let id: string = x['id'] // asszociatív tömb jelölés ["azonosito"] -> 123456

      let result: Developer | undefined = this.service.getById(id)
      if (result === undefined) this.router.navigateByUrl("list")
      else this.developer = result
    })
  }

  update(): void {
    this.service.update(this.developer)
    this.router.navigateByUrl("list")
  }
}