import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public service: SharedService) { }

  ngOnInit(): void {
  }

}
