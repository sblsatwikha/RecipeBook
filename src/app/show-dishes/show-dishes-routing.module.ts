import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDishesPage } from './show-dishes.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDishesPageRoutingModule {}
