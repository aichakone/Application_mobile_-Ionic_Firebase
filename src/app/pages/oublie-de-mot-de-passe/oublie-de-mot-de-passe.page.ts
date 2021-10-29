import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-oublie-de-mot-de-passe',
  templateUrl: './oublie-de-mot-de-passe.page.html',
  styleUrls: ['./oublie-de-mot-de-passe.page.scss'],
})
export class OublieDeMotDePassePage implements OnInit {

  constructor(private alertCtrl: AlertController) { }
  async show() {
    let alert = await this.alertCtrl.create({
      header:"Confirmation",
      subHeader:"Email",
      message:"demande envoyée",
      buttons: [
        {
          text:"Ok",
          handler: () => {

          }
        }

      ]

    });
    alert.present()
  }
    ngOnInit() {
    }

  }
