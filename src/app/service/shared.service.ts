import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  // error messages received from the login attempt
  public errors: any = [];

  //Datos de usuarios
  public datoUsuario: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
    this.http.post(this.APIUrl + '/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        console.log(user);
      },
      err => {
        this.errors = err['error'];
        console.log(err);
      }
    );
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

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.Correo = null;
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];
    localStorage.setItem('token', this.token);
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    console.log(token_decoded);
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.Correo = token_decoded.Correo;
  }

}