import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiUrl: string = "https://api.siposm.hu/skill"
  skills: Skill[] = []
  skillToEdit: Skill = new Skill()
  skillToCreate: Skill = new Skill()

  constructor(private http: HttpClient, private authService: AuthService) {
    this.read()
  }

  create(): void {
    this.http.post(this.apiUrl, this.skillToCreate).subscribe({
      next: (response) => {
        console.log(response)
        this.read()
        this.skillToCreate = new Skill()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  update(): void {
    this.http.put(this.apiUrl, this.skillToEdit).subscribe({
      next: (response) => {
        console.log(response)
        this.read()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  delete(skill: Skill): void {
    this.http.delete(this.apiUrl, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.authService.getToken()
      }),
      body: {
        id: skill.id
      }
    }).subscribe({
      next: response => {
        console.log(response)
        this.read()
      },
      error: error => {
        console.log(error)
      }
    })
  }

  loadForEdit(skill: Skill): void {
    this.skillToEdit = {...skill}
  }

  private read(): void {
    this.http.get<Skill[]>(this.apiUrl).subscribe(
      data => this.skills = data.map(skill => Object.assign(new Skill(), skill))
    )
  }
}
