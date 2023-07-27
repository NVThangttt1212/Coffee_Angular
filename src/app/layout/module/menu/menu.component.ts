import {AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ElementRef } from '@angular/core';
import {ApiService} from "../../../shared/servic/api.service";
import {TranslateService} from "@ngx-translate/core";

interface MenuItem {
  id: number;
  title: string;
  img: string;
  colorText: string;
  backgroudImg: string;
  description: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit{
  constructor(private apimenuServic: ApiService,
              private translate: TranslateService) {}
  itemsmenu!: MenuItem[];
  isAnimation: boolean = false

  ngOnInit() {
    this.apimenuServic.getData().subscribe(result =>{
      this.itemsmenu = result.apimenu.itemsMenu
      console.log(this.itemsmenu)
    })
  }
  ngAfterViewInit() {
    this.isAnimation = true
  }


  switchToVietnamese(): void {
    this.translate.use('vi');
  }

  switchToEnglish(): void {
    this.translate.use('en');
  }
}

