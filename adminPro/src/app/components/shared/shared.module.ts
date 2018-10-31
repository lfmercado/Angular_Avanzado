import { NgModule } from '@angular/core';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations:[
       BreadCrumbsComponent,
       HeaderComponent,
       SidebarComponent,
       
    ],
    exports:[
        BreadCrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        
    ],
    imports: [
        FormsModule
    ],
    providers:[]
})

export class SharedModule { }