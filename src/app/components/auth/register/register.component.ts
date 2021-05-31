import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


import { SharedService } from 'src/app/service/shared.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any;
  public userProfile: any = [];
  public preview: string;

  constructor(public service: SharedService, public router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.service.getToken()) {
      this.router.navigateByUrl('home');
    }

    this.user = {
      Correo: 'Test3@gmail.com',
      password1: 'Test',
      password2: 'Test',
      Nombre: 'Test',
      Apellido1: 'TEst',
      Apellido2: 'test',
      // Imagenperfil: null,
    }

  }


  uploadProfilePicture(event): any {
    const profilePicture = event.target.files[0];
    this.extraerBase64(profilePicture).then((image: any) => {
      console.log("%%% IMAGE ", image);
      this.preview = image.base;
      console.log("%%% PREVIEW BASE 64 IMAGE ", this.preview)
    })
    this.userProfile.push(profilePicture)
    console.log("IMAGE PUSH TO userProfile", this.userProfile)
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
  })


  register() {
    try {
      const userFormData = new FormData();
      this.userProfile.forEach(element => {
        console.log("%%% ARCHIVO ", element);
        userFormData.append('Imagenperfil', element); //files?
        console.log("%%% USER FORM DATA ",userFormData)
      });


      if (this.user.password1 === this.user.password2) {
        const user = {
          'Correo': this.user.Correo,
          'password': this.user.password1,
          'Nombre': this.user.Nombre,
          'Apellido1': this.user.Apellido1,
          'Apellido2': this.user.Apellido2,
          'Imagenperfil': this.preview,
        };

        console.log("%%% USER TO SEND ", user)

        this.service.addUsuario(user).subscribe(data => {
          //   console.log(data);
          console.log("ADD NEW USER ", data);
          this.router.navigateByUrl('auth');
        }, error => {
          console.log("%%% ERROR ADD USER", error);
        });
      } else {
        console.log("las contraseñas no son iguales")
      }
    } catch (error) {
      console.log("%%% ERROR REGISTER NEW USER ", error)
    }
  }


}
