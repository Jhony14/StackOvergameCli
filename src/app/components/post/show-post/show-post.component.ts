import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(public service: SharedService, public router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    let id:number = +this.activatedroute.snapshot.paramMap.get('id');
    console.log(id);
  }

}
