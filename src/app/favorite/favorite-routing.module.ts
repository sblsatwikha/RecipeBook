import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favoritePage } from './favorite.page';

const routes: Routes = [
  {
    path: '',
    component: favoritePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class favoritePageRoutingModule {}
