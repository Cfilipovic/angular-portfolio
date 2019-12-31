import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor() { }

  initProjects() {
    const blog = {title: "title", description: "description", languages: ["Java"], image: "./assets/portfolio/blog.png", version: "1.0", url: "/blog"};
    const bugtracker = {title: "Bug Tracker", description: "description", languages: ["Java"], image: "./assets/portfolio/bugtracker.png", version: "0.5", url: "/bugtracker"};
    const design = {title: "Daily UI Design", description: "Daily UI challenge to improve my design skills", languages: ["Angular 8.0", "NodeJS", "CSS", "HTML"], image: "./assets/portfolio/design.png", version: "1.0", url: "/design"};
    const news = {title: "title", description: "description", languages: ["Java"], image: "./assets/portfolio/news.png", version: "1.0", url: "/news"};

    const myObservable = of([
      blog,
      bugtracker,
      design,
      news]
    );


    return myObservable;
  }
}
