import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ApiService} from "../../../../shared/servic/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit{
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('itemtest', { static: true }) itemContainer!: ElementRef;
  itemId!: number;
  item: any;
  details!: any[];
  productData: any;
  itemsToShow: number = 8;
  isAllItemsShown: boolean = false;
  isAnimation: boolean = false;
  constructor(private route: ActivatedRoute,
              private ApiServic : ApiService) {}

  ngOnInit() {
    this.ApiServic.getData().subscribe(result =>{
      this.details = result.apiProduct

    });
    this.route.params.subscribe(params =>{
      this.itemId = +params['id']
      this.ApiServic.getDataByIdDetail(this.itemId).subscribe(
        (data:any) => {
          this.productData = data;
        }
      );
    })
  }
  ngAfterViewInit() {
    this.isAnimation = true
  }

  loadMoreItems() {
    this.itemsToShow += 8;
    if (this.itemsToShow >= this.details.length) {
      this.isAllItemsShown = true;
    }
  }
  loadLestItems(){
    this.itemsToShow -= 8;
    if(this.itemsToShow === 8 ){
      this.isAllItemsShown = false;
    }
  }
}

