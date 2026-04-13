import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from '../developer';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrl: './edit2.component.css'
})
export class Edit2Component {
  developer: Developer = new Developer()
  developers: Developer[] = []

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(x => {
      let id: string = x['id'] // asszociatív tömb jelölés ["azonosito"] -> 123456

      this.read()

      let result: Developer | undefined = this.developers.find(x => x.id === id)
      if (result === undefined) {
        this.router.navigateByUrl("list")
      } else {
        this.developer = result
      }
    })
  }

  update(): void {
    let idx = this.developers.findIndex(x => x.id === this.developer.id)
    this.developers[idx] = this.developer

    this.save()

    this.router.navigateByUrl("list")
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem("dev_DB", JSON.stringify(this.developers))
  }
}