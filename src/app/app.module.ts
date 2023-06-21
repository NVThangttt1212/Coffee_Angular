import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap/dist/js/bootstrap.min.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageModule } from "./layout/home-page/home-page.module";
import { ReactiveFormsModule} from "@angular/forms";
import { FooterHomeComponent } from "./layout/footer-home/footer-home.component";
import { BuyComponent } from './layout/module/buy/buy.component';
import { SigninModule } from "./layout/module/signin/signin.module";
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ScrollTopModule } from "./layout/module/scroll-top/scroll-top.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterHomeComponent,
    BuyComponent,
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


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
