import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {
}
