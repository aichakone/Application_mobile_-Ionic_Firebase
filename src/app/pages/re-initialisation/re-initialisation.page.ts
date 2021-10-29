import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ParseSourceFile } from "@angular/compiler";
import { FirebaseApp } from "@angular/fire/app";
import { AngularFirestore } from "@angular/fire/compat/firestore";
@Component({
  selector: 'app-re-initialisation',
  templateUrl: './re-initialisation.page.html',
  styleUrls: ['./re-initialisation.page.scss'],
} )

export class ReInitialisationPage implements OnInit {
  user: any;
  user_conect: FirebaseApp;

  constructor(public auth: AngularFireAuth, public fire: AngularFirestore) { }
  

  ngOnInit() {
  }
  updatePass(pass){
    if(pass.value.old_pass!='' && pass.value.new_pass!='' && pass.value.conf_new!='' ){
      this.auth.authState.subscribe(auth =>{
        if(auth){
          this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
            this.user = result;
            if(this.user.userpassword == pass.value.old_pass){
              if(pass.value.new_pass == pass.value.conf_new ){
                auth.updatePassword(pass.value.new_pass);
              }else{
                console.log("le nouveau mot de passe et confiermer sont different");
              }
            }else {
              console.log("Ancien mot de passe incorrecte");
            }
          });
        }else{
          console.log("non encore connecter");
        }
      })
    }else{
      console.log(" vous n'etes pas connecter");
    }
  }
}

