import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/servic/auth.service";
import {ApiService} from "../../shared/servic/api.service";
import {AuthGuard} from "../../shared/servic/AuthGuard";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private auth: AuthService,
              private apimenu: ApiService,
              private route : Router
              ) {}

  submenu :any[] = []
  bonus :any[] = []
  card!: number;


  ngOnInit() {
    this.apimenu.getNumberProduct().subscribe((value) => {
      this.card = value;
    });
    this.apimenu.getData().subscribe(result =>{
      this.submenu = result.apimenu.submenu;
      this.bonus = result.apimenu.bonus
    })
  }
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


  clickCart(){
    this.route.navigate(['cart'])
  }
}
