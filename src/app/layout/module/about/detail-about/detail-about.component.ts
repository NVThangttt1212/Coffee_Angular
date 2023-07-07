import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../../shared/servic/api.service";
interface typeApiAbout{
  id: number,
  title: string,
  bg: string,
  titleDes: string,
  desDetail: string,
  img: string,
  des: string,
  text: string,
  text1: string,
  text2: string,
  mxh: string,
  email: string,
  bonus: string,

}
@Component({
  selector: 'app-detail-about',
  templateUrl: './detail-about.component.html',
  styleUrls: ['./detail-about.component.scss']
})
export class DetailAboutComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private router: Router,
              private  ApiAbout : ApiService) {
  }
  id!: number
  apiUnId: typeApiAbout[] = []
  api!: typeApiAbout;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.ApiAbout.getDataByIdAbout(this.id).subscribe(
        (data: any) => {
          this.api = data;
        }
      );
    });
    this.ApiAbout.getOtherDataAbout(this.id).subscribe(
      (data: typeApiAbout[]) => {
        this.apiUnId = data;
      }
    );
  }

  // viết hàm để gọi lại hàm ở servic để nó thực hiện lại 1 lần nữa
  handleItemClick(id: number) {
    this.ApiAbout.getDataByIdAbout(id).subscribe((data: any) => {
      this.api = data;
      this.router.navigate(['/detailAbout', id]);
    });
    this.ApiAbout.getOtherDataAbout(id).subscribe((data: typeApiAbout[]) => {
      this.apiUnId = data;
    });
  }
}
