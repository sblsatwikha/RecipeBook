import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDishesPageRoutingModule } from './show-dishes-routing.module';

import { ShowDishesPage } from './show-dishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDishesPageRoutingModule
  ],
  declarations: [ShowDishesPage]
})
export class ShowDishesPageModule {}
