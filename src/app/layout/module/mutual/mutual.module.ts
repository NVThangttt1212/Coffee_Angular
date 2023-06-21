import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutualRoutingModule } from './mutual-routing.module';
import { MutualComponent } from './mutual.component';


@NgModule({
  declarations: [
    MutualComponent
  ],
  imports: [
    CommonModule,
    MutualRoutingModule
  ]
})
export class MutualModule { }
