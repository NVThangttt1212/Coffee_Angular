import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./layout/home-page/home-page.component";
import { SigninComponent} from "./layout/module/signin/signin.component";
import {  BuyComponent} from "./layout/module/buy/buy.component";
import { AuthGuard} from "./shared/servic/AuthGuard";
import {DetailsComponent} from "./layout/module/menu/details/details.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'shopcafe', loadChildren: () => import('./layout/module/shopcafe/shopcafe.module').then(m => m.ShopcafeModule)},
  { path: 'menu', loadChildren: ()=> import('./layout/module/menu/menu.module').then(m => m.MenuModule)},
  { path: 'news', loadChildren: () => import('./layout/module/news/news.module').then(m => m.NewsModule)},
  { path: 'mutual', loadChildren: () => import('./layout/module/mutual/mutual.module').then(m => m.MutualModule)},
  { path: 'about', loadChildren: () => import('./layout/module/about/about.module').then(m => m.AboutModule)},
  { path: 'signin', component: SigninComponent},
  { path: 'buy', component: BuyComponent, canActivate: [AuthGuard]},
  { path: 'detail/:id', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
