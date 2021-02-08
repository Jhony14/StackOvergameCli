import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public service: SharedService, public router: Router) { }

  PostList: any = [];

  ngOnInit(): void {
    this.refreshPostList();
  }

  refreshPostList() {
    this.service.getPost().subscribe(data => {
      this.PostList = data;
      console.log(data);
    });
  }

}
