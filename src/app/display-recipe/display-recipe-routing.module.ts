import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayRecipePage } from './display-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayRecipePageRoutingModule {}
