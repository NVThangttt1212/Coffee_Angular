import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { ApiService } from "../../../shared/servic/api.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('cart') Overlay!: ElementRef;
  @ViewChild('lay') lay!: ElementRef;

  //khai báo các biến
  productCart: any[] = [];
  isShow!: boolean;
  totalPrice: number = 0;
  totalPriceChange!: number;
  valueCart!: number;
  itemPriceInit: number[] = [];


  constructor(
    private apiProduct: ApiService,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit() {
    this.apiProduct.getCart().subscribe(result => {
      this.productCart = result;
      this.isShow = this.productCart.length === 0;
      this.calculateTotalPriceInit();
      this.valueCart = this.productCart.length;
      this.apiProduct.setNumberProduct(this.valueCart);
      this.handleItemCart();
    });
  }
  clickOverlay() {
    this.Overlay.nativeElement.style.right = '-400px';
    this.Overlay.nativeElement.style.transition = 'right 0.4s ease';
    setTimeout(() => {
      window.history.back();
    }, 400);
    this.lay.nativeElement.style.display = 'none';
  }
  handleItemCart() {
    this.itemPriceInit = [];
    this.productCart.forEach((item) => {
      this.itemPriceInit.push(item.price / item.value);
      this.totalPriceChange = this.totalPrice;
    });
  }
  calculateTotalPrice() {
    this.totalPriceChange = this.productCart.reduce((total, item) => total + item.price, 0);
  }
  calculateTotalPriceInit() {
    this.totalPrice = 0;
    for (let item of this.productCart) {
      this.totalPrice += item.price;
    }
  }
  plus(index: number) {
    if (index >= 0 && index < this.productCart.length) {
      this.productCart[index].value = ++this.productCart[index].value

      this.productCart[index].price = this.productCart[index].value * this.itemPriceInit[index];
      this.calculateTotalPrice();
    }
  }
  minus(index: number) {
    if (index >= 0 && index < this.productCart.length) {
      if (this.productCart[index].value > 1) {
        this.productCart[index].value = --this.productCart[index].value
        this.productCart[index].price = this.productCart[index].value * this.itemPriceInit[index];
        this.calculateTotalPrice();
      }
    }
  }

  orderAllProduct() {
    const url = 'http://localhost:3000/order'
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const orders = this.productCart.map(item => ({
      id: item.id,
      title: item.title,
      img: item.img,
      price: item.price,
      value: item.value
    }));
    const body = orders;
    this.http.post(url, body,{headers}).subscribe(
      response =>{
        console.log('phản hồi từ server:', response);
        this.showToastSuc()
      },
      error => {
        console.log('post thất bại:', error)
      }
    )

    // khi thanh toán xong thì xóa hết api trong cart
    this.deleteAllItems()
  }
  deleteAllItems() {
    this.apiProduct.deleteAllItemsInApiCart().subscribe(
      () => {
        console.log('Đã xóa tất cả các item trong API thành công.');
      },
      (error) => {
        console.log('Lỗi xóa các item trong API:', error);
      }
    );
  }


  deleProduct(orderId: number) {
    alert('bạn có chắc chắn muốn xóa ?')
    this.apiProduct.deleteOrder(orderId).subscribe(
      () => {
        console.log('Đơn hàng đã được xóa thành công');
        this.apiProduct.getCart().subscribe( result =>{
          this.productCart = result
        })
      },
      (error) => {
        console.error('Lỗi khi xóa đơn hàng:', error);
      }
    );
  }
  showToastSuc() {
    this.snackbar.open('Thanh toán thành công!', 'Đóng', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}



