import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { CreateLinkValueComponent } from './create-link-value/create-link-value.component';
import { CreateDateValueComponent } from './create-date-value/create-date-value.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ CreateResourceComponent, CreateLinkValueComponent, CreateDateValueComponent ],
  exports: [ CreateResourceComponent ]
})
export class CreateResourceModule { }