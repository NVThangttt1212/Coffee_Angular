import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ApiService} from "../../../shared/servic/api.service";
import {AuthGuard} from "../../../shared/servic/AuthGuard";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit,OnChanges{
  constructor(private ApiProduct: ApiService,
              private route: ActivatedRoute,
              private rou: Router,
              private snackbar: MatSnackBar) {
  }
  value: number = 1;
  productId!: number;
  productData :any;
  maxQuantity: number = 100;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      const currentValue = changes['value'].currentValue;
      if (currentValue <= 0 || isNaN(currentValue)) {
        this.value = 1;
      } else if (currentValue > 100) {
        this.value = 100;
      }
    }
  }

  SizeValuePrive!: number
  initialSizeValuePrive!: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.ApiProduct.getDataById(this.productId).subscribe(
        (data:any) => {
          this.productData = data;
        }
      );
    });

    this.ApiProduct.getSelectedSizeValue().subscribe((value: number) => {
      this.SizeValuePrive = value
      this.initialSizeValuePrive = value;
    });
  }
  decreaseValue() {
    if (this.value > 1) {
      this.value -= 1;
      this.calculateTotalPrice();
    }
  }
  increaseValue() {
    if(this.value< this.maxQuantity){
      this.value += 1;
      this.calculateTotalPrice();
    }else {
      this.value = 100
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice() {
    if (this.initialSizeValuePrive) {
      this.SizeValuePrive = this.initialSizeValuePrive * this.value;
    }
  }


  onInputKeydown(event: KeyboardEvent) {
    if (event.key === '+' && this.value >= 100) {
      event.preventDefault();
    }
    const keyPressed = event.key;
    const numericValue = Number(keyPressed);

    if (!isNaN(numericValue)) {
      // Người dùng đã nhập một giá trị số từ bàn phím
      // Tăng hoặc giảm giá trị hiện tại dựa trên phím "+" hoặc "-"
      if (keyPressed === '+') {
        this.value += numericValue;
      } else if (keyPressed === '-') {
        this.value -= numericValue;
      }
    }
  }

  clickAddProduct() {
    this.ApiProduct.setCard(this.value);
    this.showToastAddCard()
    this.ApiProduct.setProduct(this.productData)
    this.ApiProduct.setNumberProduct(this.value)
    setTimeout(()=>{
      this.rou.navigate(['cart'])
    },2000)
  }
  showToastAddCard() {
    this.snackbar.open('Thêm vào giỏ hàng thành công!', 'Đóng', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
  onKeyPress(event: KeyboardEvent) {
    const keyCode = event.which || event.keyCode;
    const valid = keyCode >= 48 && keyCode <= 57;
    if (!valid) {
      event.preventDefault();
    }
  }
}
