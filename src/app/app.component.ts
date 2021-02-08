import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stackovergamecli';

  //Datos de usuarios
  public datoUsuario: any;

  constructor(public service: SharedService) { }

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.datoUsuario != null && !this.service.errors) {
      this.service.login({ 'Correo': this.datoUsuario.Correo, 'password': this.datoUsuario.password });
    }
  }

}
