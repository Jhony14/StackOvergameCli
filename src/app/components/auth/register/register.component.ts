import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any;

  constructor(public service: SharedService, public router: Router) { }

  ngOnInit(): void {
    if (this.service.getToken()) {
      this.router.navigateByUrl('home');
    }

    this.user = {
      Correo: '',
      password1: '',
      password2: '',
      Nombre: '',
      Apellido1: '',
      Apellido2: '',
      Imagenperfil: null,
    }

  }

  register() {
    if (this.user.password1 === this.user.password2) {
      const user = {
        'Correo': this.user.Correo,
        'password': this.user.password1,
        'Nombre': this.user.Nombre,
        'Apellido1': this.user.Apellido1,
        'Apellido2': this.user.Apellido2,
        'Imagenperfil': this.user.Imagenperfil,
      };

      this.service.addUsuario(user).subscribe(data => {
        //   console.log(data);
        console.log("añadido");
        this.router.navigateByUrl('auth');
      }, error => {
        console.log("****ERRORES*******")
        console.log(error.error);
      });
    } else {
      console.log("las contraseñas no son iguales")
    }
  }
}
