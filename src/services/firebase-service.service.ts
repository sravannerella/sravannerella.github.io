import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private afd: AngularFireDatabase) { }

  getPosts(){
    return this.afd.list('/writings');
  }

  getPostsById(id){
    return this.afd.list('/writings', ref => ref.orderByChild('id').equalTo(1));
  }

}
