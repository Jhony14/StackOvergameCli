import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SharedService } from 'src/app/service/shared.service'

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient, private service: SharedService) {
  }

  // send a POST request to the API to create a new blog post
  create(post, token) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this.service.token
      })
    };
    return this.http.post('/api/posts', JSON.stringify(post), httpOptions); /* maybe cambiar /api/posts por /post/ */
  }

}