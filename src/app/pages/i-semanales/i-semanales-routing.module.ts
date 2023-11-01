import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ISemanalesPage } from './i-semanales.page';

const routes: Routes = [
  {
    path: '',
    component: ISemanalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ISemanalesPageRoutingModule {}
