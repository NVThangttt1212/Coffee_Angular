import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap/dist/js/bootstrap.min.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageModule } from "./layout/home-page/home-page.module";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterHomeComponent } from "./layout/footer-home/footer-home.component";
import { BuyComponent } from './layout/module/buy/buy.component';
import { SigninModule } from "./layout/module/signin/signin.module";
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ScrollTopModule } from "./layout/module/scroll-top/scroll-top.module";
import { MatBadgeModule} from "@angular/material/badge";
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import { CartComponent } from './layout/module/cart/cart.component';
import { ShareModuleModule} from "./shared/share-module/share-module.module";
import { HttpClientModule } from "@angular/common/http";
import { InfobuyComponent } from './layout/module/infobuy/infobuy.component';
import { MatInputModule} from "@angular/material/input";
import { MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterHomeComponent,
        BuyComponent,
        CartComponent,
        InfobuyComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    ReactiveFormsModule,
    SigninModule,
    MatSnackBarModule,
    ScrollTopModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ShareModuleModule,
    HttpClientModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule


  ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
