import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from 'src/app/core/auth.service';
import { DesignService } from '../design.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-dashboard',
  templateUrl: './design-dashboard.component.html',
  styleUrls: ['./design-dashboard.component.scss']
})
export class DesignDashboardComponent implements OnInit {
  title: string
  image: string = null
  description: string 
  buttonText: string = "Publish Design"

  uploadPercent: Observable<number>
  downloadURL: Observable<string>

  constructor(
    private auth: AuthService, 
    private designService: DesignService, 
    private router: Router,
    private storage: AngularFireStorage
    ) { }

  ngOnInit() {
  }

  publishDesign() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      description: this.description,
      image: this.image,
      title: this.title,
      submitted: new Date()
    };
    this.designService.create(data)
    this.title = ''
    this.description = ''
    this.buttonText = 'Published Design'
    setTimeout(() => (this.buttonText = "Publish Design"), 3000);
    this.router.navigate(["/design"])
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `designs/${file.name}`
    if(file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    }
    else {
      const task = this.storage.upload(path, file)
      const fileRef = this.storage.ref(path);
      this.uploadPercent = task.percentageChanges()
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL() 
          this.downloadURL.subscribe(url => this.image = url)
        })
      ).subscribe()
      console.log('image uploaded')
    }
  }
}