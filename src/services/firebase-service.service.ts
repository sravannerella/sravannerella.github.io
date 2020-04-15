import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private afd: AngularFireDatabase) { }

  getPosts(){
    return this.afd.list('/writings', ref => ref.orderByChild('createdOn'));
  }

  getScribbles(){
      return this.afd.list('/scribbles', ref => ref.orderByChild('createdOn'));
  }

  getGuides(){
      return this.afd.list('/guides', ref=> ref.orderByChild('createdOn'));
  }

  getPostsById(id){
    id = Number(id);
    return this.afd.list('/writings', ref => ref.orderByChild('id').equalTo(id));
  }

  getScribblesById(id){
    id = Number(id);
    console.log("ID:", id);
    return this.afd.list('/scribbles', ref => ref.orderByChild('id').equalTo(id));
  }

  getGuidesById(id){
    id = Number(id);
    return this.afd.list('/guides', ref => ref.orderByChild('id').equalTo(id));
  }

}
