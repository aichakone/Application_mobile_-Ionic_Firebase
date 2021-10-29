import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public log: AuthService, public route: Router) {}
  ngOnInit(){

  }
loginUser(data: any){
try{
  this.log.login(data.value.username, data.value.password).then(
res=>{
   console.log(res),
   this.route.navigate(['/accueil'])
})
}
  catch(error){
    console.log(error);
  }
}
}
