import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../shared/servic/api.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  @ViewChild('cart') Overlay!: ElementRef;
  @ViewChild('lay') lay!: ElementRef;
  constructor(private apiProduct: ApiService) {
  }
  productCart: any
  value!:number
  maxQuantity: number = 100;
  price!: number;
  initPrice!: number ; // giá trị tiền ban đầu
  isShow : boolean = false
  ngOnInit() {
    this.apiProduct.getProduct().subscribe((value) => {
    this.productCart = value;

    });
    this.apiProduct.getNumberProduct().subscribe((value)=>{
      this.value = value
    })
    this.apiProduct.getSelectedSizeValue().subscribe((value)=>{
      this.price = value
      this.initPrice = value
    })
      this.price = this.initPrice * this.value

    if(this.initPrice){
      this.isShow = true
    }else {
      this.isShow = false
    }

    const cartElement = document.querySelector('.cart');
    cartElement?.classList.remove('open');

    setTimeout(() => {
      cartElement?.classList.add('open');
    }, 10000);
  }


  decreaseValue() {
    if (this.value > 1) {
      this.value -= 1;
      this.sPriceCart()
    }
  }
  increaseValue() {
    if(this.value< this.maxQuantity){
      this.value += 1;
      this.sPriceCart()
    }else {
      this.value = 100
      this.sPriceCart()
    }
  }

  sPriceCart(){
    if(this.initPrice){
      this.price = this.initPrice * this.value
    }
  }
  onInputKeydown(event: KeyboardEvent) {
    if (event.key === '+' && this.value >= 100) {
      event.preventDefault();
    }
    const keyPressed = event.key;
    const numericValue = Number(keyPressed);

    if (!isNaN(numericValue)) {
      if (keyPressed === '+') {
        this.value += numericValue;
      } else if (keyPressed === '-') {
        this.value -= numericValue;
      }
    }
  }
  onKeyPress(event: KeyboardEvent) {
    const keyCode = event.which || event.keyCode;
    const valid = keyCode >= 48 && keyCode <= 57;
    if (!valid) {
      event.preventDefault();
    }
  }
  clickOverlay() {
    this.Overlay.nativeElement.style.right = '-400px';
    this.Overlay.nativeElement.style.transition = 'right 0.4s ease';
    setTimeout(()=>{
      window.history.back();
    }, 400)
    this.lay.nativeElement.style.display = 'none'
  }
}
