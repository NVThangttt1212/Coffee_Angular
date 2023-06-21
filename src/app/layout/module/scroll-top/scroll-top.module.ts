import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollTopComponent} from "./scroll-top.component";



@NgModule({
  declarations: [
    ScrollTopComponent
  ],
  exports: [
    ScrollTopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScrollTopModule { }
