import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopcafeComponent} from "./shopcafe.component";

const routes: Routes = [
  { path: '', component: ShopcafeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopcafeRoutingModule { }
