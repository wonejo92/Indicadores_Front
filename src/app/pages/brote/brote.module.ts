import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrotePageRoutingModule } from './brote-routing.module';

import { BrotePage } from './brote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrotePageRoutingModule
  ],
  declarations: [BrotePage]
})
export class BrotePageModule {}
