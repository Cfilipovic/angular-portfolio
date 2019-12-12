import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsModule } from './blog/posts/posts.module';
import { BugsModule } from './bugtracker/bugs/bugs.module';
import { DesignModule } from './design/design.module';

const routes: Routes = []

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PostsModule,
    BugsModule,
    DesignModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
