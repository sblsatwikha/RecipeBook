import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'favorite',
        loadChildren: () => import('../favorite/favorite.module').then(m => m.favoritePageModule)
      },
      {
        path: 'my-pantry',
        loadChildren: () => import('../my-pantry/my-pantry.module').then(m => m.myPantryPageModule)
      },
      {
        path: 'my-recipes',
        loadChildren: () => import('../my-recipes/account.module').then(m => m.accountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/my-pantry',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/my-pantry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
