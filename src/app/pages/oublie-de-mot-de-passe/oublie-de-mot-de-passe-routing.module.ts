import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OublieDeMotDePassePage } from './oublie-de-mot-de-passe.page';

const routes: Routes = [
  {
    path: '',
    component: OublieDeMotDePassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OublieDeMotDePassePageRoutingModule {}
