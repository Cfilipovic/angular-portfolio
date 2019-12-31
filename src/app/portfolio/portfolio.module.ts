import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material';
import { PortfolioDashboardComponent } from './portfolio-dashboard/portfolio-dashboard.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioDashboardComponent },
]

@NgModule({
  declarations: [
    PortfolioDashboardComponent
  ],
  imports: [
    SharedModule,
    MatPaginatorModule, 
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class PortfolioModule { }
