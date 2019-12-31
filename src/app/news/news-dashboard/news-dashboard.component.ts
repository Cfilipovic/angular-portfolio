import { Component } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent {
  mArticles:Array<any>;
  mSources:Array<any>;
  closeResult: string;
  social: boolean = false;

  constructor(private newsapi:NewsApiService){        
  }

  ngOnInit() {
      //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);

      //load news sources
      this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

  searchArticles(source){
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  openModal() {
    this.social = !this.social;
  }
}
