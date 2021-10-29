import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertController, IonicModule } from '@ionic/angular';

import { OublieDeMotDePassePageRoutingModule } from './oublie-de-mot-de-passe-routing.module';

import { OublieDeMotDePassePage } from './oublie-de-mot-de-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OublieDeMotDePassePageRoutingModule
  ],
  declarations: [OublieDeMotDePassePage]
})
@Component({
selector: 'app-oublie-de-mot-de-passe',
templateUrl: './oublie-de-mot-de-passe.page.html',
styleUrls: ['./oublie-de-mot-de-passe.page.scss'],
})
export class OublieDeMotDePassePageModule {
  constructor(public alertController: AlertController) { }
  async Alert(){
   const alert = await this.alertController.create({
    header: 'Envoyer',
    message:'Votre demande est bien prix en charge',
    buttons: ['OK']

   })
   await alert.present();
   let result = await alert.onDidDismiss();
   console.log(result);

  }
   ngOnInit(){
     
   }
}
