import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isShow: boolean = false;
  getShow(): boolean{
    return this.isShow
  }
  setShow(value: boolean){
    this.isShow = value;
  }

  //----------------------------------------

  private formValue: any;
  setFormValue(value: any) {
    this.formValue = value;
  }
  getFormValue(): any {
    return this.formValue;
  }
  clearFormValue() {
    this.formValue = null;
  }

}
