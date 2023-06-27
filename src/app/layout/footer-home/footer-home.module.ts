import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterHomeRoutingModule } from './footer-home-routing.module';
import { FooterHomeComponent} from "./footer-home.component";


@NgModule({
    declarations: [
        FooterHomeComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        FooterHomeRoutingModule,
    ]
})
export class FooterHomeModule { }
