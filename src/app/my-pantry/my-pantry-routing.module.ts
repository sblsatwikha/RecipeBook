import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { myPantry } from './my-pantry.page';

const routes: Routes = [
  {
    path: '',
    component: myPantry,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class myPantryPageRoutingModule {}
