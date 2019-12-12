import { Injectable } from '@angular/core';
import { Bug } from './bug';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  bugsCollection: AngularFirestoreCollection<Bug>
  bugDoc: AngularFirestoreDocument<Bug>

  constructor(private afs: AngularFirestore) {
    this.bugsCollection = this.afs.collection('bugs', ref =>
      ref.orderBy('submitted', 'desc'))
  }

  getBugs() {
    return this.bugsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Bug
        const id = a.payload.doc.id
        return { id, ...data }
      })
    }))
  }

  getBugData(id: string) {
    this.bugDoc = this.afs.doc<Bug>(`bugs/${id}`)
    return this.bugDoc.valueChanges()
  }

  getBug(id: string) {
    return this.afs.doc<Bug>(`bugs/${id}`)
  }

  create(data: Bug){
    this.bugsCollection.add(data)
  }

  delete(id: string){
    return this.getBug(id).delete()
  }

  update(id: string, formData){
    return this.getBug(id).update(formData)
  }
}
