import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  mProjects:Array<any>;

  constructor(private portfolioapi:PortfolioService) { }

  ngOnInit() {
      //load projects
      this.portfolioapi.initProjects().subscribe(data => this.mProjects = data);
  }
}
