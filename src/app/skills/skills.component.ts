import { Component } from '@angular/core';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor(public skillService: SkillService) { }
}
