import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-show-guide',
  templateUrl: './show-guide.component.html',
  styleUrls: ['./show-guide.component.css']
})
export class ShowGuideComponent implements OnInit {

  PostId: number;
  PostData: any = [];

  constructor(public service: SharedService, public router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.PostId = +this.activatedroute.snapshot.paramMap.get('id');
    this.refreshNews();
  }

  refreshNews() {
    this.service.getGuide(this.PostId).subscribe(data => {
      this.PostData = data;
      console.log(data)
    }, error => {
      console.log(error);
    });
  }

}
