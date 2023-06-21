import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ApiService} from "../../../../shared/servic/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,AfterViewInit{
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('itemtest', { static: true }) itemContainer!: ElementRef;

  itemId!: string;
  item: any;
  details: any[] = [];
  hotDetail: any[] = [];
  teaDetail: any[] = [];
  isPageLoaded = false;

  constructor(private route: ActivatedRoute,
              private ApiServic : ApiService,
              private elementRef: ElementRef,
              private renderer: Renderer2) {}
  ngOnInit() {
    this.details = this.ApiServic.apimenu.details;
    this.hotDetail = this.ApiServic.apimenu.hotDetail;
    this.teaDetail = this.ApiServic.apimenu.teaDetail;
    this.route.params.subscribe(params =>{
      this.itemId = params['id']
      this.ApiServic.apimenu.getDataById(+this.itemId).subscribe((data: any) => {
        this.item = data;
      });
    })
  }
  ngAfterViewInit() {
      this.isPageLoaded = true;
  }

  scrollNext() {

  }

  scrollPrev() {

  }


}

