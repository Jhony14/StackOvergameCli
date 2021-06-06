import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media";

  // http options used for making API calls
  private httpOptions: any;

  // the actual JWT token
  public token: string;

  // the token expiration date
  public token_expires: Date;

  // the username of the logged in user  username=correo
  public Correo: string;
  public userName: string;

  // error messages received from the login attempt
  public errors: any = [];

  //the Id of the logged in user
  public userId: any;

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user): Observable<any> {
    this.http.post(this.APIUrl + '/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        console.log(data);
      },
      err => {
        this.errors = err['error'];
        console.log("Errores login: *******\n" + this.errors + "\n fin errores");
      }
    );
    return this.http.post(this.APIUrl + '/api-token-auth/', JSON.stringify(user), this.httpOptions)
  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http.post(this.APIUrl + '/api-token-refresh/', JSON.stringify({ token: this.token }), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  // Cookies para mantener sesion
  setToken(token: any) {
    this.cookies.set("token", token);
    console.log("%%%% COOKIES ADD ")
  }
  getToken() {
    console.log("%%%% USER GET");
    return this.cookies.get("token");
  }

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.Correo = null;
    this.userId = null;
    this.cookies.delete("token");
    console.log("%%%% LOG OUT CORRECTLY ")
  }

  public updateData(token) {
    console.log("%%%% UPDATE TOKEN ", token);
    this.token = token;
    this.errors = [];
    this.setToken(token);
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    console.log("%%%% Token decoded ", token_decoded);
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.Correo = token_decoded.Correo;
    console.log(token_decoded.user_id);
    this.userId = token_decoded.user_id;
  }

  getPostList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/postList/');
  }

  getPost(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/post/' + id);
  }

  addPost(val: any) {
    return this.http.post(this.APIUrl + '/post/', val);
  }

  updatePost(val: any) {
    return this.http.put(this.APIUrl + '/post/', val);
  }

  deletePost(id: number) {
    return this.http.delete(this.APIUrl + '/post/' + id);
  }

  getUsuario(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/usuario/' + id);
  }

  getUsuarioList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/usuarioAll/');
  }

  getComentarios(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/comentarios/' + id);
  }

  addComentarios(val: any) {
    return this.http.post(this.APIUrl + '/comentarios/', val);
  }

  updateComentarios(val: any) {
    return this.http.put(this.APIUrl + '/comentarios/', val);
  }

  deleteComentarios(id: number) {
    return this.http.delete(this.APIUrl + '/comentarios/' + id);
  }

  addUsuario(val: any) {
    return this.http.post(this.APIUrl + '/crear/', val);
  }

  updateUsuario(val: any) {
    return this.http.put(this.APIUrl + '/usuario/', val);
  }


}