import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NoPageFoundComponent } from './components/shared/no-page-found/no-page-found.component';

//Rutas
import { appRoute } from './app.routing';


//Modulos
import { PagesModule } from './components/pages/pages.module';
import { FormsModule } from '@angular/forms';
import { GraficaDonaComponent } from './components/grafica-dona/grafica-dona.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent,
    GraficaDonaComponent,
    
  ],
  imports: [
    BrowserModule,
    appRoute,
    PagesModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
