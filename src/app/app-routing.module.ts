import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'show-dishes',
    loadChildren: () => import('./show-dishes/show-dishes.module').then( m => m.ShowDishesPageModule)
  },
  {
    path: 'display-recipe',
    loadChildren: () => import('./display-recipe/display-recipe.module').then( m => m.DisplayRecipePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
