import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  PostId: number;
  PostData: any = [];

  constructor(public service: SharedService, public router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.PostId = +this.activatedroute.snapshot.paramMap.get('id');
    this.refreshNews();
  }

  refreshNews() {
    this.service.getNews(this.PostId).subscribe(data => {
      this.PostData = data;
      console.log(data)
    }, error => {
      console.log(error);
    });
  }

}
