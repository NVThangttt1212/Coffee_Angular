import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BuyComponent } from "../../layout/module/buy/buy.component";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  canActivate(
      next: BuyComponent,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const formValue = this.authService.getFormValue()

      if (!formValue){
        this.showToastSignIn()
        setTimeout(()=>{

          this.router.navigate(['/signin'])
        }, 2000)
        return false
      } else{
          return true
      }
  }

  showToastSignIn() {
    this.snackbar.open('Vui lòng đăng nhập để mua hàng!', 'Đóng', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

}
