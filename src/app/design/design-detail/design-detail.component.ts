import { Component, OnInit } from '@angular/core';
import { Design } from '../design';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-design-detail',
  templateUrl: './design-detail.component.html',
  styleUrls: ['./design-detail.component.scss']
})
export class DesignDetailComponent implements OnInit {
  design: Design
  editing: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private designService: DesignService
  ) { }

  ngOnInit() {
    this.getPost()
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id')
    return this.designService.getPostData(id).subscribe(data => this.design = data)
  }

  updatePost() {
    const formData = {
      title: this.design.title,
      description: this.design.description
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.designService.update(id, formData)
    this.editing = false
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id')
    this.designService.delete(id)
    this.router.navigate(["/design"])
  }
}
