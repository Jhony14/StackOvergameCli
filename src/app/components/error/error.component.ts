import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(public service: SharedService) { }

  ngOnInit(): void {
  }

}
