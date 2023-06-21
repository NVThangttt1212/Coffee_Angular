import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { ScrollTopModule } from "../scroll-top/scroll-top.module";
import { DetailsComponent } from './details/details.component';
import { ScrollAnimationDirective} from "../../../shared/directives/scroll-animation.directive";
@NgModule({
    declarations: [
        MenuComponent,
        DetailsComponent,
        ScrollAnimationDirective,
    ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ScrollTopModule
  ]
})
export class MenuModule { }
