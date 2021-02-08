import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { PostComponent } from './components/post/post.component';
import { ComentariosComponent } from './components/post/comentarios/comentarios.component';
import { AuthComponent } from './components/auth/auth.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { SharedService } from './service/shared.service';
import { RegisterComponent } from './components/auth/register/register.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PostComponent,
    ComentariosComponent,
    AuthComponent,
    UsuariosComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    ShowPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SharedService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
