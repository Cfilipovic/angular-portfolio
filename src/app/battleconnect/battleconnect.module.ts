import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleconnectComponent } from './battleconnect.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [  
  { path: 'battleconnect', component: BattleconnectComponent },
]

@NgModule({
  declarations: [
    BattleconnectComponent    
  ],
  imports: [
    SharedModule,
    MatPaginatorModule, 
    NgbCarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class BattleconnectModule { }

