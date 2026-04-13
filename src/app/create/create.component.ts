import { Component } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  developer: Developer = new Developer()

  create(): void {
    console.log(this.developer)
  }
}
