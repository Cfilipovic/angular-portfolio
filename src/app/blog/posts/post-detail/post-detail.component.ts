import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { database } from 'firebase';
import { Post } from '../post';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post
  editing: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPost()
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id')
    return this.postService.getPostData(id).subscribe(data => this.post = data)
  }

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.update(id, formData)
    this.editing = false
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.delete(id)
    this.router.navigate(["/blog"])
  }
}
