import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../../../shared/servic/api.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit{
  @ViewChild('sizeElements',{static :true}) sizeElements!: ElementRef;
  @ViewChild('overlay',{static:true}) overlay!: ElementRef;
  constructor(private ApiProduct: ApiService,
              private route: ActivatedRoute,
              private el : ElementRef,
              private router: Router) {}

  productId!: number;
  productData :any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.ApiProduct.getDataById(this.productId).subscribe(
        (data:any) => {
          this.productData = data;

        }
      );
    });

  }

  // handle click size
  activeSize: string = 'sizeS'
  handleClickSize(event: Event, si: string){
    this.activeSize = si;

    const target = event.target as HTMLSpanElement;
    const size = this.sizeElements.nativeElement.querySelectorAll('span')

    size.forEach((item: HTMLSpanElement)=>{
      if( item === target){
        item.classList.add('active')
      }else {
        item.classList.remove('active')
      }
    })

  }
  isActive(size: string): boolean {
    return this.activeSize === size;
  }
  // handle click overlay
  handleClickOverlay(){
      window.history.back()
  }

  valuePrice(){
    this.ApiProduct.setSelectedSizeValue(this.getSelectedSizeValue())
  }

  getSelectedSizeValue(): number {
    let selectedSizeValue = 0;
    if (this.productData && this.productData.price) {
      switch (this.activeSize) {
        case 'sizeS':
          selectedSizeValue = this.productData.price.sizeS;
          break;
        case 'sizeM':
          selectedSizeValue = this.productData.price.sizeM;
          break;
        case 'sizeL':
          selectedSizeValue = this.productData.price.sizeL;
          break;
      }
    }
    return selectedSizeValue;
  }
}
