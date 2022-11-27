import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayRecipePageRoutingModule } from './display-recipe-routing.module';

import { DisplayRecipePage } from './display-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayRecipePageRoutingModule
  ],
  declarations: [DisplayRecipePage]
})
export class DisplayRecipePageModule {}
