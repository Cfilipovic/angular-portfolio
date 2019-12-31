import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { NewsApiService } from './news-api.service';

const routes: Routes = [
  { path: 'news', component: NewsDashboardComponent },
]

@NgModule({
  declarations: [
    NewsDashboardComponent
  ],
  imports: [
    SharedModule,
    MatPaginatorModule, 
    RouterModule.forChild(routes)
  ],
  providers: [NewsApiService]
})
export class NewsModule { }
