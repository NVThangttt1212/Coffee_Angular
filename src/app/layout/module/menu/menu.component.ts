import {AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ElementRef } from '@angular/core';
import {ApiService} from "../../../shared/servic/api.service";

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
  constructor(private apimenuServic: ApiService) {}
  itemsmenu!: MenuItem[];
  isAnimation: boolean = false

  ngOnInit() {
    this.apimenuServic.getData().subscribe(result =>{
      this.itemsmenu = result.apimenu.itemsMenu
    })

  }
  ngAfterViewInit() {
    this.isAnimation = true
  }
}

