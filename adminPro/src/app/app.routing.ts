import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { NoPageFoundComponent } from './components/shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './components/register/register.component';


const appRoutes: Routes=[
   
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NoPageFoundComponent},
];

export const appRoute = RouterModule.forRoot(appRoutes, {useHash:true});