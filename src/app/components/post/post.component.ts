import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostList: any = [];
  public page: number;
  
  constructor(public service: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.refreshPostList();
  }

  refreshPostList() {
    this.service.getPostList().subscribe(data => {
      this.PostList = data;
      console.log(data);
    }, error => {
      console.log(error);
    }
    );
  }

}
