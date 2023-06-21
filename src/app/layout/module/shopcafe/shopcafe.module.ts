import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopcafeRoutingModule } from './shopcafe-routing.module';
import { ShopcafeComponent } from './shopcafe.component';

@NgModule({
  declarations: [
    ShopcafeComponent
  ],
  imports: [
    CommonModule,
    ShopcafeRoutingModule
  ],
  exports: [
    ShopcafeComponent
  ]
})
export class ShopcafeModule { }
