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
  usuariosData: any = [];
  public page: number;
  ModalTitle: string;
  ActivateAddEditComentario: boolean = false;
  comentario: any;

  constructor(public service: SharedService, public router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.PostId = +this.activatedroute.snapshot.paramMap.get('id');
    this.refreshComentario();
  }

  addComentario() {
    console.log("add comentario");
    this.comentario = {
      ComentariosId: 0,
      ComentariosContenido: "",
      ComentariosUsuarioId: "",
      ComentariosPostId: this.PostId,
      ComentariosValoracioncomentariosId: 1
    }
    this.ModalTitle = "Añadir nuevo comentario";
    this.ActivateAddEditComentario = true;
  }

  editComentario(item) {
    console.log("item------------" + item)
    this.comentario = item;
    this.ModalTitle = "Editar nuevo comentario";
    this.ActivateAddEditComentario = true;
  }

  deleteComentario(id){
    this.service.deleteComentarios(id).subscribe(data=>{
      console.log(data)
      this.refreshComentario();
    }, error => {
      console.log(error);
    });
  }

  closeClick() {
    this.ActivateAddEditComentario = false;
    this.refreshComentario();
  }

  refreshComentario() {
    this.service.getComentarios(this.PostId).subscribe(data => {
      this.comentarioData = data;
      console.log(this.comentarioData);
    }, error => {
      console.log(error);
    });
  }

}
