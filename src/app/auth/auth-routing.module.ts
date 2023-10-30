import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../components/pages/home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [{path: '', redirectTo: 'sign-in', pathMatch: 'full'},
    {path: 'sign-in', component: SignInComponent},];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
