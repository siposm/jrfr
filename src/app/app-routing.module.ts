import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { Edit2Component } from './components/edit2/edit2.component';
import { StatsComponent } from './components/stats/stats.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "list", component: ListComponent },
  { path: "list/:skill", component: ListComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "create", component: CreateComponent, canActivate: [AuthService] },
  { path: "delete", component: DeleteComponent, canActivate: [AuthService] },
  { path: "edit", component: EditComponent },
  { path: "edit2/:id", component: Edit2Component },
  { path: "stats", component: StatsComponent },
  { path: "skills", component: SkillsComponent },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
