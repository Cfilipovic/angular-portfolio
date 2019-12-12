import { Component, OnInit, ViewChild } from '@angular/core';
import { Bug } from '../bug';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';
import { BugService } from '../bug.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  dataSource = null
  displayedColumns: string[] = ['summary', 'description', 'severity', 'type', 'author', 'submitted']

  constructor(private bugService: BugService, public auth: AuthService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  ngOnInit() {
    this.bugService.getBugs()
        .subscribe(bugs => {
            this.dataSource = bugs as Bug[]
            this.dataSource.paginator = this.paginator
    })
  }

  delete(id: string) {
    this.bugService.delete(id)
  }
}