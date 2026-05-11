import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { Edit2Component } from './components/edit2/edit2.component';
import { StatsComponent } from './components/stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './components/skills/skills.component';

import localeHu from '@angular/common/locales/hu';
import { registerLocaleData } from '@angular/common';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteComponent } from './components/delete/delete.component';
registerLocaleData(localeHu)

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
    StatsComponent,
    SkillsComponent,
    SkillCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
