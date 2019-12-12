import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DesignListComponent } from './design-list/design-list.component';
import { DesignDetailComponent } from './design-detail/design-detail.component';
import { DesignDashboardComponent } from './design-dashboard/design-dashboard.component';

const routes: Routes = [
  { path: 'design', 
    children: [
      { path: '', component: DesignListComponent },
      { path: 'dashboard', component: DesignDashboardComponent }
    ]
  },
  { path: 'design/:id', component: DesignDetailComponent },
]

@NgModule({
  declarations: [    
  DesignListComponent,
  DesignDetailComponent,
  DesignDashboardComponent
],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DesignModule { }
