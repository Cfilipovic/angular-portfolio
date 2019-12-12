import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: 'blog', 
    children: [
      { path: '', component: PostListComponent },
      { path: 'dashboard', component: PostDashboardComponent }
    ]
  },
  { path: 'blog/:id', component: PostDetailComponent },
]

@NgModule({
  declarations: [
    PostDashboardComponent, 
    PostDetailComponent, 
    PostListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [PostService]
})
export class PostsModule { }
