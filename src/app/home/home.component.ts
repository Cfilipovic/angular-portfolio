import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faCoffee = faCoffee;
  stars = [];

  constructor() { }

  async ngOnInit() {
    await this.addStars();
    this.rotateStars();
  }

  onClick() {
    this.addStars();
    this.rotateStars();
  }

  async addStars() {
    var stars=800;
    var $stars=$(".stars");
    var r=800;
    for(var i=0;i<stars;i++){
      this.stars.push(this.stars.length);
    }
  }

  rotateStars() {
    var r=800;
    $(".star").each(function(){
      var cur=$(this);
      var s=0.2+(Math.random()*1);
      var curR=r+(Math.random()*300);
      cur.css({
        transformOrigin:"0 0 "+curR+"px",
        transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
  
      })
    })
  }
}
