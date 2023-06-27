import {AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ElementRef } from '@angular/core';
import {ApiService} from "../../../shared/servic/api.service";
import {ActivatedRoute} from "@angular/router";
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
  itemsMenu!: MenuItem[];
  isAnimation: boolean = false

  ngOnInit() {
    this.itemsMenu = this.apimenuServic.API.apimenu.itemsMenu;

  }
  ngAfterViewInit() {
    this.isAnimation = true
  }
}

