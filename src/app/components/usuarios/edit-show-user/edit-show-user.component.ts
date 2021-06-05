import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { SharedService } from 'src/app/service/shared.service'
@Component({
  selector: 'app-edit-show-user',
  templateUrl: './edit-show-user.component.html',
  styleUrls: ['./edit-show-user.component.css']
})
export class EditShowUserComponent implements OnInit {

  public user: any;
  public preview: string;

  constructor(public service: SharedService, public router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    if (this.service.getToken === null) {
      this.router.navigateByUrl('home');
    }

    this.user = {
      Correo: '',
      Nombre: '',
      Apellido1: '',
      Apellido2: '',
    }
    this.loadUserData();
  }

  uploadProfilePicture(event): any {
    const profilePicture = event.target.files[0];
    this.extraerBase64(profilePicture).then((image: any) => {
      console.log("%%% IMAGE ", image);
      this.preview = image.base;
      console.log("%%% PREVIEW BASE 64 IMAGE ", this.preview)
    });
    /*this.userProfile.push(profilePicture)
    console.log("IMAGE PUSH TO userProfile", this.userProfile)*/
  }


  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  });

  loadUserData() {

    this.service.getUsuario(this.service.userId).subscribe(data => {
      this.user = data;
      console.log("%%% USER DATA NEXT LINE");
      console.log(data);

      this.user = {
        Correo: data[0].Correo,
        Nombre: data[0].Nombre,
        Apellido1: data[0].Apellido1,
        Apellido2: data[0].Apellido2,
      };

      this.preview = data[0].Imagenperfil;

    }, error => {
      console.log(error);
    });
  }

  updateUser() {
    var val = {
      id: this.service.userId,
      Nombre: this.user.Nombre,
      Apellido1: this.user.Apellido1,
      Apellido2: this.user.Apellido2,
      Correo: this.user.Correo,
      Imagenperfil: this.preview
    };
    console.log(val);
    this.service.updateUsuario(val).subscribe(data => {
      console.log("%%% SUCCES UPDATE USER NEXT LINE");
      console.log(data);
      //this.router.navigateByUrl('home');
    }, error => {
      console.log("%%% ERROR UPDATE USER NEXT LINE");
      console.log(error);
    });
  }

}




