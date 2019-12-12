import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugDetailComponent } from './bug-detail/bug-detail.component';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { MatPaginatorModule } from '@angular/material';

const routes: Routes = [
  { path: 'bugtracker', 
    children: [
      { path: '', component: BugListComponent },
      { path: 'dashboard', component: BugDashboardComponent }
    ]
  },
  { path: 'bugtracker/:id', component: BugDetailComponent },
]

@NgModule({
  declarations: [
    BugListComponent,
    BugDetailComponent,
    BugDashboardComponent
  ],
  imports: [
    SharedModule,
    MatPaginatorModule, 
    RouterModule.forChild(routes)
  ]
})
export class BugsModule { }
