import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
