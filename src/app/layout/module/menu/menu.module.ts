import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { ScrollTopModule } from "../scroll-top/scroll-top.module";
import { DetailsComponent } from './details/details.component';
import { ScrollAnimationDirective} from "../../../shared/directives/scroll-animation.directive";
import { DetailProductComponent } from './details/detail-product/detail-product.component';
import { MatButtonModule } from "@angular/material/button";
import { ShareModuleModule } from "../../../shared/share-module/share-module.module";

@NgModule({
    declarations: [
        MenuComponent,
        DetailsComponent,
        ScrollAnimationDirective,
        DetailProductComponent,
    ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ScrollTopModule,
    MatButtonModule,
    ShareModuleModule,
  ]
})
export class MenuModule { }
