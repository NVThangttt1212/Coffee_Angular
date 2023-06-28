import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../shared/servic/api.service";
import {Router} from "@angular/router";

interface typeApiAbout{
  id: number,
  title: string,
  img: string,
  bg: string,
  titleDes: string,
  des: string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  hovered = false;
  constructor(private ApiAbout: ApiService,
              private route: Router) {}

  // các biến----------------------------------------------
  apiAbout: typeApiAbout[] = []
  ngOnInit() {
    this.apiAbout = this.ApiAbout.API.apiAbout
  }


}
