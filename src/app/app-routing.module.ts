import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsModule } from './blog/posts/posts.module';
import { BugsModule } from './bugtracker/bugs/bugs.module';
import { DesignModule } from './design/design.module';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { PortfolioModule } from './portfolio/portfolio.module';

const routes: Routes = []

@NgModule({
  imports: [
    RouterModule.forRoot(routes),  
    BugsModule,
    DesignModule,
    HomeModule,
    NewsModule,
    PortfolioModule,
    PostsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
