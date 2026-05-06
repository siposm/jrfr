import { Component, Input } from '@angular/core';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skill: Skill = new Skill()
  constructor(public skillService: SkillService) { }
}
