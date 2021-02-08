import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

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

  constructor(public service: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.datoUsuario == null) {
      this.user = {
        Correo: '',
        password: ''
      };
    } else {
      if (!this.service.errors) {
        this.service.login({ 'Correo': this.datoUsuario.Correo, 'password': this.datoUsuario.password });
      }
      this.user = {
        Correo: '',
        password: ''
      };
    }
  }

  //Validator
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
  })

  get email() { return this.loginForm.get('email') }

  login() {
    this.service.login({ 'Correo': this.user.Correo, 'password': this.user.password });
    if (!this.service.errors) {
      localStorage.setItem('usuario', JSON.stringify(this.user));
      this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
      this.service.setToken(this.service.token); //Coockies
      this.router.navigateByUrl('home');
    }

  }

  refreshToken() {
    this.service.refreshToken();
    this.router.navigateByUrl('home');
  }

  logout() {
    this.service.logout();
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    this.router.navigateByUrl('home');
  }

}
