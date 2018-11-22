import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PAGES_ROUTES } from './pages.routes';

// Ng2 - charts
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ PagesComponent,
                  DashboardComponent,
                  ProgressComponent,
                  Graficas1Component,
                  IncrementadorComponent,
                  GraficoDonaComponent,
                  AccountSettingsComponent
                ],
  exports:       [ DashboardComponent,
                  ProgressComponent,
                  Graficas1Component],
  imports:       [
                  SharedModule,
                  PAGES_ROUTES,
                  FormsModule,
                  ChartsModule

                 ]
})

export class PagesModule {
  constructor() {}
}