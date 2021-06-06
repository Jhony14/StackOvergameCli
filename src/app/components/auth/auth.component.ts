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

  constructor(public service: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.user = {
      Correo: '',
      password: ''
    }
  }

  //Validator
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
  })

  get email() { return this.loginForm.get('email') }

  login() {
    localStorage.setItem('usuario', JSON.stringify(this.user));
    const user = { 'Correo': this.user.Correo, 'password': this.user.password };
    this.service.login(user).subscribe(data => {
      this.service.setToken(data.token);

        this.router.navigateByUrl('home');

    }, error => {
      console.log("%%% ERROR LOGIN", error);
    });

    /*
    if (!this.service.errors) {
      localStorage.setItem('usuario', JSON.stringify(this.user));
      this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
      this.service.setToken(this.service.token); //Coockies
      this.router.navigateByUrl('home');
    }*/
  }
  /*
    login() {
      const user = { email: this.email, password: this.password };
      this.userService.login(user).subscribe(data => {
        this.userService.setToken(data.token);
      });
    }*/

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
