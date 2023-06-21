import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/servic/auth.service";
import {ApiService} from "../../shared/servic/api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent {
  constructor(private auth: AuthService,
              private apimenu: ApiService,
              private route : Router,
              ) {}


  submenu = this.apimenu.apimenu.submenu
  bonus = this.apimenu.apimenu.bonus
  isShow(): boolean {
    return this.auth.getShow();
  }

  router(){
    this.route.navigate(['/signin'])
  }
  signOut(){
    alert('bạn có chắc chắn muốn Đăng Xuất?')
    this.auth.clearFormValue()
    this.route.navigate(['/'])
    this.auth.setShow(false)
  }
}
