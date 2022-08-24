import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaPage } from './transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaPageRoutingModule {}
