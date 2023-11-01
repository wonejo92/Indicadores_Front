import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ISemanalesPageRoutingModule } from './i-semanales-routing.module';

import { ISemanalesPage } from './i-semanales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ISemanalesPageRoutingModule
  ],
  declarations: [ISemanalesPage]
})
export class ISemanalesPageModule {}
