import { Component, OnInit } from '@angular/core';
import {AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { noWhiteSpaceValidator } from "../../../shared/validators/no-white-space.validator";
import {ApiService} from "../../../shared/servic/api.service";

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.scss']
})
export class ContentHomeComponent implements OnInit {
  emailForm!: FormGroup;
  constructor(private fb: FormBuilder, api: ApiService) {}


  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['',Validators.compose(
        [ Validators.required,
                    noWhiteSpaceValidator,
                    Validators.minLength(6),
                    Validators.pattern(/^[A-Za-z0-9@]+$/),
        ]
      )]});
  }
  submit(){
    console.log(this.emailForm.value)
    if(this.emailForm.value) {
      alert('gửi thành công!')
    }else if(!this.emailForm.value) {
      alert('gửi thất bại')
    }
  }

  protected readonly onsubmit = onsubmit;
}
