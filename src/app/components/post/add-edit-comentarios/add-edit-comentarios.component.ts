import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-add-edit-comentarios',
  templateUrl: './add-edit-comentarios.component.html',
  styleUrls: ['./add-edit-comentarios.component.css']
})
export class AddEditComentariosComponent implements OnInit {

  constructor(public service: SharedService) { }

  @Input() comentario: any;
  ComentariosId: number;
  ComentariosContenido: string;
  ComentariosUsuarioId: number;
  ComentariosPostId: number;
  ComentariosValoracioncomentariosId: number = 1;

  ngOnInit(): void {
    console.log(this.comentario);
    this.ComentariosId = this.comentario.ComentariosId;
    this.ComentariosContenido = this.comentario.ComentariosContenido;
    this.ComentariosUsuarioId = this.comentario.ComentariosUsuarioId;
    this.ComentariosPostId = this.comentario.ComentariosPostId;
    this.ComentariosValoracioncomentariosId = this.comentario.ComentariosValoracioncomentariosId;
  }

  addComentario() {
    var val = {
      ComentariosId: this.ComentariosId,
      ComentariosContenido: this.ComentariosContenido,
      ComentariosUsuarioId: this.service.userId,
      ComentariosPostId: this.ComentariosPostId,
      ComentariosValoracioncomentariosId: this.ComentariosValoracioncomentariosId
    };
    this.service.addComentarios(val).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  updateComentario() {
    var val = {
      ComentariosId: this.ComentariosId,
      ComentariosContenido: this.ComentariosContenido,
      ComentariosUsuarioId: this.service.userId,
      ComentariosPostId: this.ComentariosPostId,
      ComentariosValoracioncomentariosId: this.ComentariosValoracioncomentariosId
    };
    this.service.updateComentarios(val).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
