import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { Edit2Component } from './edit2/edit2.component';

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "list", component: ListComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "create", component: CreateComponent },
  { path: "delete", component: DeleteComponent },
  { path: "edit", component: EditComponent },
  { path: "edit2/:id", component: Edit2Component },
  { path: "**", redirectTo: "homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
