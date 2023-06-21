import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MutualComponent} from "./mutual.component";

const routes: Routes = [
  { path: '', component: MutualComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutualRoutingModule { }
