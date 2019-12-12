import { Injectable } from '@angular/core';
import { Design } from './design';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DesignService {
  designCollection: AngularFirestoreCollection<Design>
  designDoc: AngularFirestoreDocument<Design>

  constructor(private afs: AngularFirestore) {
    this.designCollection = this.afs.collection('designs', ref =>
      ref.orderBy('submitted', 'desc'))
  }

  getPosts() {
    return this.designCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Design
        const id = a.payload.doc.id
        return { id, ...data }
      })
    }))
  }

  getPostData(id: string) {
    this.designDoc = this.afs.doc<Design>(`designs/${id}`)
    return this.designDoc.valueChanges()
  }

  getPost(id: string) {
    return this.afs.doc<Design>(`designs/${id}`)
  }

  create(data: Design){
    this.designCollection.add(data)
  }

  delete(id: string){
    return this.getPost(id).delete()
  }

  update(id: string, formData){
    return this.getPost(id).update(formData)
  }
}
