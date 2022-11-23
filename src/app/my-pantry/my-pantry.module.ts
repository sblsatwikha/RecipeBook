import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { myPantry } from './my-pantry.page';

import { myPantryPageRoutingModule } from './my-pantry-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    myPantryPageRoutingModule
  ],
  declarations: [myPantry]
})
export class myPantryPageModule {}
