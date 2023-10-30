import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './components/pages/pages-routing.module';
import { PagesModule } from './components/pages/pages.module';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./components/pages/pages-routing.module').then(m => m.PagesRoutingModule) } ,
  { path: 'auth', canActivate:[] , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
