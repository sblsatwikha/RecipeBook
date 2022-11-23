import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { favoritePage } from './favorite.page';
import { favoritePageRoutingModule } from './favorite-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    favoritePageRoutingModule
  ],
  declarations: [favoritePage]
})
export class favoritePageModule {}
