import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/servic/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {startWith, Subject, switchMap, take, tap} from "rxjs";
import { filter } from 'rxjs/operators';
import {noWhiteSpaceValidator} from "../../../shared/validators/no-white-space.validator";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  formSubmit$ = new Subject<boolean | null>();
  signInForm!: FormGroup;
  constructor(private fb: FormBuilder,
              private  apiFrom: AuthService,
              private  route: Router,
              private router: ActivatedRoute,
              private  snackbar: MatSnackBar) {}

  ngOnInit(): void {
    // handle call a lot of
    this.formSubmit$
      .pipe(
        tap(() => this.signInForm.markAsDirty()),
        switchMap(() =>
          this.signInForm.statusChanges.pipe(
            startWith(this.signInForm.status),
            filter((status) => status !== 'PENDING'),
            take(1)
          )
        ),
        filter((status) => status === 'VALID'),
        tap(() => {
          this.submit();
        })
      )
      .subscribe();

    this.signInForm = this.fb.group({
      username: ['', [Validators.required, noWhiteSpaceValidator]],
      password: ['', [Validators.required]],
      rememberMe: false,
    });
  }

  submit(){
      const value = this.signInForm.value
      this.apiFrom.setFormValue(value)
      setTimeout(()=>{
        if (value.username === 'admin' && value.password === '12345'){
          this.showToastSuc()
          window.history.back();
          this.apiFrom.setShow(true)
        }else {
          this.showToastErSignIn()
        }
      },2000)
  }
  showToastErSignIn() {
    this.snackbar.open('Tài Khoản Mật Khẩu không chính xác!', 'Đóng', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
  showToastSuc() {
    this.snackbar.open('Đăng nhập thành công!', 'Đóng', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
  overlay(){
    window.history.back();
  }
}
