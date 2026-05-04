import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[] = []
  skillToEdit: Skill = new Skill()
  skillToCreate: Skill = new Skill()

  constructor(private http: HttpClient) {
    this.read()
  }

  create(): void {
    this.http.post("https://api.siposm.hu/skill", this.skillToCreate).subscribe({
      next: (response) => {
        console.log(response)

        this.read()

        // a backend-től megkapott objektum alapján frissíteni kell az itteni elemet
        // this.skillToCreate.id = (response as any).skill.id
        // this.skills.push(this.skillToCreate)

        this.skillToCreate = new Skill()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  update(): void {
    this.http.put("https://api.siposm.hu/skill", this.skillToEdit).subscribe({
      next: (response) => {
        console.log(response)
        this.read()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  loadForEdit(skill: Skill): void {
    this.skillToEdit = {...skill}
  }

  private read(): void {
    this.http.get<Skill[]>("https://api.siposm.hu/skill").subscribe(
      data => this.skills = data.map(skill => Object.assign(new Skill(), skill))
    )
  }
}
