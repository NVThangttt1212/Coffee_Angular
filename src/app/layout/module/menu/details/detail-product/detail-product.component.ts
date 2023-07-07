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


  // đoạn này phải post thêm vào api cart
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
  activeSize: string = 'size S'
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
  valuePrice(){
    const size = this.activeSize
    console.log(this.activeSize)
    this.ApiProduct.setSize(size)
    this.ApiProduct.setSelectedSizeValue(this.getSelectedSizeValue())
  }
  isActive(size: string): boolean {
    return this.activeSize === size;
  }
  // handle click overlay
  handleClickOverlay(){
      window.history.back()
  }



  getSelectedSizeValue(): number {
    let selectedSizeValue = 0;
    if (this.productData && this.productData.price) {
      switch (this.activeSize) {
        case 'size S':
          selectedSizeValue = this.productData.price.sizeS;
          break;
        case 'size M':
          selectedSizeValue = this.productData.price.sizeM;
          break;
        case 'size L':
          selectedSizeValue = this.productData.price.sizeL;
          break;
      }
    }
    return selectedSizeValue;
  }
}
