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
    
  }

  register(){

  }

}
