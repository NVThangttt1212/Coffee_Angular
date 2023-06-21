import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SliderComponent } from "./slider/slider.component";
import { ContentHomeComponent } from './content-home/content-home.component';
import { HomePageComponent } from "./home-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    ContentHomeComponent,


  ],
  exports: [
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class HomePageModule { }
