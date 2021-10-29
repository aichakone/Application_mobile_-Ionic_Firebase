import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
 itemsCollect: AngularFirestoreCollection;
 items: Observable<any[]>;
  constructor(public fire: AngularFirestore) { }
  ngOnInit() {
    this.getData();
  } 
  async getData(){
    this.itemsCollect = this.fire.collection('user');
    this.items = this.itemsCollect.valueChanges();
  }
}

