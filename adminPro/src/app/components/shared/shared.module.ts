import { NgModule } from '@angular/core';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';





@NgModule({
    declarations:[
       BreadCrumbsComponent,
       HeaderComponent,
       SidebarComponent,
       
    ],
    exports:[
        BreadCrumbsComponent,
        HeaderComponent,
        SidebarComponent, //para el ngIf, ngFor, Pipes
        
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    providers:[]
})

export class SharedModule { }