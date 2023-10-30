import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './components/pages/pages-routing.module';
import { PagesModule } from './components/pages/pages.module';
import {LoginGuard} from "./shared/services/guards/login.guard";

const routes: Routes = [
  { path: '' , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) } ,
  { path: 'page',canActivate: [LoginGuard], loadChildren: () => import('./components/pages/pages-routing.module').then(m => m.PagesRoutingModule) } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
