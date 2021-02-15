import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostList: any = [];
  public page: number;
  ModalTitle: string;
  ActivateAddEditPost: boolean = false;
  post: any;

  constructor(public service: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.refreshPostList();
  }


  addPost() {
    console.log("add post");
    this.post = {
      PostId: 0,
      PostTitulo: "",
      PostContenido: "",
      PostUsuarioId: ""
    }
    this.ModalTitle = "Añadir nuevo post";
    this.ActivateAddEditPost = true;
  }

  editPost(item) {
    this.post = item;
    this.ModalTitle = "Editar post";
    this.ActivateAddEditPost = true;
  }

  deletePost(id){
    this.service.deletePost(id).subscribe(data=>{
      console.log(data)
      this.refreshPostList();
    }, error => {
      console.log(error);
    });
  }

  closeClick() {
    this.ActivateAddEditPost = false;
    this.refreshPostList();
  }


  refreshPostList() {
    this.service.getPostList().subscribe(data => {
      this.PostList = data;
      console.log(data);
    }, error => {
      console.log(error);
    }
    );
  }

}
