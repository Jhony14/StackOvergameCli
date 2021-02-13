import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userList: any = [];
  public page: number;

  constructor(public service: SharedService) { }

  ngOnInit(): void {
    console.log(this.service.getToken());
    this.refreshUser();
  }

  refreshUser() {
    this.service.getUsuarioList().subscribe(data => {
      this.userList = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
