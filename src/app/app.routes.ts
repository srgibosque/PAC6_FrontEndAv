import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'homeModule',
    loadChildren: () => 
      import('./homeModule/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'listModule',
    loadChildren: () => 
      import('./listModule/list.module').then((m) => m.ListModule),
  },
  {
    path: 'staticsModule',
    loadChildren: () => 
      import('./staticsModule/statics.module').then((m) => m.StaticsModule),
  },
];
