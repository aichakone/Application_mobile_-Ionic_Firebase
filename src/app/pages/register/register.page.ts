import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore' 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public serv: AuthService, public create: AngularFirestore) { }

  ngOnInit() {
  }
 register (data){
try {
  this.serv.registerUser(data.value.usermail, data.value.password).then( response => {
    console.log(response),
    this.create.collection('user').doc(response.user.uid).set({
      'username' : data.value.username,
      'useremail' : data.value.usermail,
      'userpassword' : data.value.password
    })

},
  )
} catch (error) { 

    }
  }
}
