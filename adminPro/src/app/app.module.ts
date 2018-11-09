import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NoPageFoundComponent } from './components/shared/no-page-found/no-page-found.component';

//Rutas
import { appRoute } from './app.routing';

//Servicios
import { ServiceModule } from './services/service.module';

//Modulos
import { PagesModule } from './components/pages/pages.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent,

    
  ],
  imports: [
    BrowserModule,
    appRoute,
    PagesModule,
    FormsModule,
    ServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
