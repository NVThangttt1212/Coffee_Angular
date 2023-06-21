import {Component, OnInit} from '@angular/core';
import {AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ApiService} from "../../../shared/servic/api.service";
import {MatSnackBar,MatSnackBarConfig } from "@angular/material/snack-bar";
import Swal from 'sweetalert2';
import {filter, startWith, Subject, switchMap, take, tap} from "rxjs";

interface Api{
  img: string,
  title: string,
  date: string
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{

  constructor(private ApiNews: ApiService) {}
  showAllItems: boolean= false
  ApiNew :Api[] = []
  itemsToShow: number = 9;
  isAllItemsShown: boolean = false;
  loadMoreItems() {
    this.itemsToShow += 9;
    if (this.itemsToShow >= this.ApiNew.length) {
      this.isAllItemsShown = true;
    }
  }
  loadLestItems(){
    this.itemsToShow -= 9;
    if(this.itemsToShow === 9 ){
      this.isAllItemsShown = false;
    }
  }
  ngOnInit() {
    this.ApiNew = this.ApiNews.ApiNews
    console.log(this.ApiNew)
  }
}
