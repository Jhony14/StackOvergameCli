import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stackovergamecli';

  constructor(public service: SharedService) { }

  ngOnInit(): void {
    console.log(this.service.getToken() + " token")
    if (this.service.getToken()) {
      this.service.updateData(this.service.getToken())
    }
  }

}
