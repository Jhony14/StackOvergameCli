import { Component } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stackovergamecli';

  constructor(public service: SharedService) { }
}
