import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    FormComponent
  ]
})
export class SharedModule { }
