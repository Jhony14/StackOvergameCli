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

  //Datos de usuarios
  public datoUsuario: any;

  constructor(public service: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.datoUsuario != null) {
      this.router.navigateByUrl('home');
    }

    this.user = {
      Correo: 'jhonyp',
      password1: 'm326895741',
      password2: 'm326895741',
      Nombre: 'prueba Jhony',
      Apellido1: 'OwO',
      Apellido2: 'OwO',
      Imagenperfil: '',
    }

  }

  register() {
    const user = {
      'Correo': this.user.Correo,
      'password1': this.user.password1,
      'password2': this.user.password2,
      'Nombre': this.user.Nombre,
      'Apellido1': this.user.Apellido1,
      'Apellido2': this.user.Apellido2,
      'Imagenperfil': this.user.Imagenperfil,
    };

    this.service.addUsuario(user).subscribe(data =>{
      console.log(data);
      console.log("añadido");
    });
    console.log("enviado");
    console.log(user)
  }

}
