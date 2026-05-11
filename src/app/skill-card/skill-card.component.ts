import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillService } from '../services/skill.service';
import { DeveloperService } from '../services/developer.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {

  @Input() skill: Skill = new Skill()

  constructor(public skillService: SkillService,
    private devService: DeveloperService,
    public authService: AuthService) { }

  countDevsForSpecificSkill(): number {
    return this.devService.developers.filter(x => x.skills.includes(this.skill.name)).length
  }
}
