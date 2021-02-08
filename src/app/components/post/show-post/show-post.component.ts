import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  PostId: number;
  PostData: any = [];

  constructor(public service: SharedService, public router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.PostId = +this.activatedroute.snapshot.paramMap.get('id');
    this.refreshPost();
  }

  refreshPost() {
    this.service.getPost(this.PostId).subscribe(data => {
      this.PostData = data;
      console.log(data);
    }, error => {
      console.log(error);
    }
    );
  }

}
