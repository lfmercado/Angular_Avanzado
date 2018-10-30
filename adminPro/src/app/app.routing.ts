import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { Graficas1Component } from './components/pages/graficas1/graficas1.component';
import { NoPageFoundComponent } from './components/shared/no-page-found/no-page-found.component';
import { PagesComponent } from './components/pages/pages.component';


const appRoutes: Routes=[
    {
        path: '', component: PagesComponent,
        children:[
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo:'/dashboard', pathMatch:'full'},
        ]
    },
    
    {path: 'login', component: LoginComponent},
    {path: 'register', component: LoginComponent},
    {path: '**', component: NoPageFoundComponent},
];

export const appRoute = RouterModule.forRoot(appRoutes, {useHash:true});