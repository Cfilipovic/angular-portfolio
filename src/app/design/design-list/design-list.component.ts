import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';
import { Design } from '../design';

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrls: ['./design-list.component.scss']
})
export class DesignListComponent implements OnInit {
  designs: Observable<Design[]>

  constructor(private designService: DesignService, public auth: AuthService) { }

  ngOnInit() {
    this.designs = this.designService.getPosts()
  }

  delete(id: string) {
    this.designService.delete(id)
  }

}
