import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../shared/servic/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-infobuy',
  templateUrl: './infobuy.component.html',
  styleUrls: ['./infobuy.component.scss']
})
export class InfobuyComponent implements OnInit{
  constructor(private route : ActivatedRoute,
              private ApiServic: ApiService,
              private fb: FormBuilder) {
  }

  itemId!: number;
  productData: any;
  buyForm!: FormGroup;
  selectedDistricts: string[] = [];


  ngOnInit() {
    this.buyForm = this.fb.group({
      emailFormControl: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]),
      ],
      FullNameFormControl: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ],
      PhoneFormControl: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      AddressFormControl:[
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      selectedCity: [''],
      selectedDistrict: ['']

    });

    this.route.params.subscribe(params =>{
      this.itemId = +params['id']
      this.ApiServic.getDataByIdCart(this.itemId).subscribe(
        (data:any) => {
          this.productData = data;
          console.log(this.productData)
        }
      );
    })
  }

  vietnam = [
    {
      city: 'Hà Nội',
      district: [
        'Bắc Từ Liêm',
        'Cầu Giấy',
        'Hà Đông',
        'Thanh Xuân',
        'Đông Anh',
        'Long Biên'
      ]
    },
    {
      city: 'Hải Dương',
      district: [
        'Tứ Kỳ',
        'Tp Hải Dương',
        'Kinh Môn',
        'Gia Lộc',
        'Qúy Cao',
      ]
    }
  ];
  changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }
    this.selectedDistricts = this.vietnam.find((data) => data.city === city)?.district || [];
    console.log('haha')
  }

  submit(){
    console.log(this.productData.value)
  }
}


