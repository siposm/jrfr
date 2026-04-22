import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { Edit2Component } from './edit2/edit2.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ListComponent,
    HomepageComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    Edit2Component,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
