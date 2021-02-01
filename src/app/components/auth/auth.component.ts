import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/service/shared.service'
import { throwError } from 'rxjs'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user: any;

  //Datos de usuarios
  public datoUsuario: any;

  constructor(public service: SharedService) { }

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.datoUsuario == null) {
      this.user = {
        Correo: '',
        password: ''
      };
    } else {
      this.service.login({ 'Correo': this.datoUsuario.Correo, 'password': this.datoUsuario.password });
      this.user = {
        Correo: '',
        password: ''
      };
    }
  }

  login() {
    this.service.login({ 'Correo': this.user.Correo, 'password': this.user.password });
    localStorage.setItem('usuario', JSON.stringify(this.user));
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
  }

  refreshToken() {
    this.service.refreshToken();
  }

  logout() {
    this.service.logout();
    localStorage.removeItem('usuario');
  }

}
