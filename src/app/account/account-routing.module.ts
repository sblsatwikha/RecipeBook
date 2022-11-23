import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { account } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: account,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accountPageRoutingModule {}
