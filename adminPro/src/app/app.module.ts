import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NoPageFoundComponent } from './components/shared/no-page-found/no-page-found.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { Graficas1Component } from './components/pages/graficas1/graficas1.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BreadCrumbsComponent } from './components/shared/bread-crumbs/bread-crumbs.component';



//Rutas
import { appRoute } from './app.routing';
import { PagesComponent } from './components/pages/pages.component';
appRoute
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    appRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
