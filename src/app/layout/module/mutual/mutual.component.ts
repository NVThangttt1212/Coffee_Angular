import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/servic/api.service";

interface apiType{
  img: string,
  title: string,
  date: string
}
@Component({
  selector: 'app-mutual',
  templateUrl: './mutual.component.html',
  styleUrls: ['./mutual.component.scss']
})
export class MutualComponent implements OnInit{
  constructor(private apimutual: ApiService) {}

  api: apiType[] =[]
  ngOnInit() {
    this.apimutual.getData().subscribe(result =>{
      this.api = result.apiMutual
    })
  }
}
