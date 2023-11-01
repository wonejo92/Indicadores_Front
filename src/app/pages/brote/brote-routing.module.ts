import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrotePage } from './brote.page';

const routes: Routes = [
  {
    path: '',
    component: BrotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrotePageRoutingModule {}
