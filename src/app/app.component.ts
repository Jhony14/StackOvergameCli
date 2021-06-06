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

  public imageProfile: string;

  ngOnInit(): void {
    console.log(this.service.getToken() + " token")
    if (this.service.getToken()) {
      this.service.updateData(this.service.getToken())
    }

    this.getProfileImage();
  }


  getProfileImage() {
    this.service.getUsuario(this.service.userId).subscribe(data => {
      //console.log("%% USER IMAGE ", data[0].Imagenperfil);
      this.imageProfile = data[0].Imagenperfil;
    }, error => {
      console.log("ERROR IMAGE USER ", error);
    });
  }


}
