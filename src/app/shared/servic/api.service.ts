import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
const API = 'http://localhost:3000/API'
const ApiOrder = 'http://localhost:3000/order'
const ApiCart = 'http://localhost:3000/ApiCart'
@Injectable({
  providedIn: 'root'
})
export class ApiService {



  //phương thức get
  getData(): Observable<any> {
    return this.http.get<any>(API);
  }
  getDataOrder(): Observable<any>{
    return this.http.get<any>(ApiOrder)
  }


  //get api cart

  getCart(): Observable<any>{
    return this.http.get<any>(ApiCart)
  }

  //phương thức delete cart
  private apiUrl = 'http://localhost:3000/ApiCart';
  deleteOrder(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete(url);
  }

  //delete all
  private apiBaseUrl = 'http://localhost:3000';
  deleteAllItemsInApiCart() {
    const url = `${this.apiBaseUrl}/ApiCart`;
    return this.http.delete(url);
  }


//-----------------------------------------------------------------
  // handle inject data
  private card: Subject<number> = new Subject<number>();

  getCard(): Observable<number> {
    return this.card.asObservable();
  }

  setCard(value: number): void {
    this.card.next(value);
  }

  // handle cart khi mà 2 component mặc định chưa được hiển thị cùng nhau dùng BehaviorSubject
  private product: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getProduct(): Observable<any> {
    return this.product.asObservable();
  }

  setProduct(value: any): void {
    this.product.next(value);
  }


  // handle size khi click vào mua ngay
  private size : BehaviorSubject<string> = new BehaviorSubject<string>('');
  getSize(): Observable<string>{
    return  this.size.asObservable();
  }

  setSize(value: string): void{
    this.size.next(value)
  }



  private numberProduct: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getNumberProduct(): Observable<any> {
    return this.numberProduct.asObservable();
  }

  setNumberProduct(value: any): void {
    this.numberProduct.next(value);
  }

  //handle lấy ra tiền của từng size
  private selectedSizeValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getSelectedSizeValue(): Observable<number> {
    return this.selectedSizeValue.asObservable();
  }

  setSelectedSizeValue(value: number): void {
    this.selectedSizeValue.next(value);
  }

  // lấy ra dữ liệu mà id được click
  constructor (private http: HttpClient) {
    this.getData().subscribe(result => {
      this.ApiAbout = result.apiAbout;
      this.ApiMenu = result.apimenu.itemsMenu;
      this.ApiProduct = result.apiProduct;

    });
    this.getDataOrder().subscribe(result =>{
      this.ApiOrder = result
    })
    this.getCart().subscribe(result =>{
      this.ApiCart = result
    })
  }
  ApiOrder: any[] = [];
  ApiCart : any[]=[];
  ApiAbout: any[]=[];
  ApiMenu: any[]=[];
  ApiProduct: any[]=[]
  getDataByIdAbout(id: number): Observable<any>{
    const item: any = this.ApiAbout.find((item: any) => item.id === id);
    return of(item)
  }
  getDataByIdCart(id: number): Observable<any>{
    const item: any = this.ApiCart.find((item: any) => item.id === id);
    return of(item)
  }
  getDataByIdOrder(id: number): Observable<any>{
    const item: any = this.ApiOrder.find((item: any) => item.id === id);
    return of(item)
  }

  //lấy ra dữ liệu mà id không được click
  getOtherDataAbout(id: number): Observable<any[]> {
    const otherItems: any[] = this.ApiAbout.filter((item: any) => item.id !== id);
    return of(otherItems);
  }


  getDataByIdDetail(id: number): Observable<any> {
    const item = this.ApiMenu.find((item: any) => item.id === id);
    return of(item)
  }

  getDataById(id: number): Observable<any> {
    const item = this.ApiProduct.find((item: any) => item.id === id);
    return of(item)
  }


}
