import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }
  login(email,password){
    return new Promise<any>((resolve,reject)=>{
    this.auth.signInWithEmailAndPassword(email, password).then(
        res=>resolve(res),
        err=>reject(err)
    );
    })
  }
  registerUser(email, password){
  return new Promise<any>((resolve,reject)=>{
    this.auth.createUserWithEmailAndPassword(email, password).then(
      res=>resolve(res),
      err=>reject(err)
    );
});
  }
  logoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.auth.currentUser) {
        this.auth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    }) 
  }
  userDetails() {
    return this.auth.user
    }
}
