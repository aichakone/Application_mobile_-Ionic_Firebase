import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  itemsCollect: AngularFirestoreCollection;
  items: Observable<any[]>;
constructor(public fire : AngularFirestore) { }

ngOnInit(){
this.getData();
}
async getData(){
this.itemsCollect = this.fire.collection('user');
this.items = this.itemsCollect.valueChanges ();
}
}
