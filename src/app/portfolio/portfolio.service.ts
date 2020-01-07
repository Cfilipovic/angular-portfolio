import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor() { }

  initProjects() {
    const blog = {title: "Blog", description: "Simple blog site so I can post general tips or tutorials", date: "12/13/2019", languages: ["Angular", "Asychronous", "Service"], image: "./assets/portfolio/news.png", version: "1.0", url: "/blog"};
    const bugtracker = {title: "Bug Tracker", description: "Simple bug tracker for developers to create and file requests and update their progress/resolve bugs as work has been done.", date: "12/20/2019",languages: ["Java"], image: "./assets/portfolio/news.png", version: "0.5", url: "/bugtracker"};
    const design = {title: "Daily UI Design", description: "Daily UI challenge to improve my design skills.  Focusing on mobile application design using Adobe XD", date: this.getTodaysDate(),languages: ["Adobe XD", "Web Design", ], image: "./assets/portfolio/news.png", version: "1.0", url: "/design"};
    const news = {title: "News", description: "Simple news aggregator site.", date: "12/31/2019", languages: ["Angular", "Asychronous", "Service"], image: "./assets/portfolio/news.png", version: "1.0", url: "/news"};

    const myObservable = of([
      blog,
      bugtracker,
      design,
      news]
    );


    return myObservable;
  }

  getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayStr = mm + '/' + dd + '/' + yyyy;

    return todayStr;
  }
}
