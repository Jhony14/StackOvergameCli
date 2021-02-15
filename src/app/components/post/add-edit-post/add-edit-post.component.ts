import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  constructor(public service: SharedService) { }

  @Input() post: any;
  PostId: number;
  PostTitulo: string;
  PostContenido: string;
  PostUsuarioId: number;

  ngOnInit(): void {
    this.PostId = this.post.PostId;
    this.PostTitulo = this.post.PostTitulo;
    this.PostContenido = this.post.PostContenido;
    this.PostUsuarioId = this.service.userId;
  }

  addPost() {
    var val = {
      PostId: this.PostId,
      PostTitulo: this.PostTitulo,
      PostContenido: this.PostContenido,
      PostUsuarioId: this.service.userId,
    };
    this.service.addPost(val).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  updatePost() {
    var val = {
      PostId: this.PostId,
      PostTitulo: this.PostTitulo,
      PostContenido: this.PostContenido,
      PostUsuarioId: this.service.userId,
    };
    this.service.updatePost(val).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
