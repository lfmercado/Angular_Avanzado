import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { pagesRoute } from './pages.routing';
import { FormsModule } from '@angular/forms'
import { IncrementadorComponent } from '../incrementador/incrementador.component';
import { GraficaDonaComponent } from '../../components/grafica-dona/grafica-dona.component'
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficaDonaComponent,
        AccountSettingsComponent,
        PromesasComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficaDonaComponent
    ],
    imports: [
        SharedModule,
        pagesRoute,
        FormsModule,
        ChartsModule

    ],
    providers:[]
})

export class PagesModule { }