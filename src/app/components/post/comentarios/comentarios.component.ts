import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  PostId: number;
  comentarioData: any = [];
  usuarioId: number;
  usuariosData: any = [];
  public page: number;

  constructor(public service: SharedService, public router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.PostId = +this.activatedroute.snapshot.paramMap.get('id');
    this.refreshPost();
  }

  refreshPost() {
    console.log("comentario " + this.PostId);
    this.service.getComentarios(this.PostId).subscribe(data => {
      this.comentarioData = data;
      console.log(this.comentarioData);
    }, error => {
      console.log(error);
    });
  }

}
