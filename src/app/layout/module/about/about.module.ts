import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ScrollTopModule} from "../scroll-top/scroll-top.module";
import { DetailAboutComponent } from './detail-about/detail-about.component';


@NgModule({
  declarations: [
    AboutComponent,
    DetailAboutComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        ScrollTopModule
    ]
})
export class AboutModule {

}
