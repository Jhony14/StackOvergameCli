import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';    // add this
import { FormsModule } from '@angular/forms';    // add this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { PostComponent } from './components/post/post.component';
import { ComentariosComponent } from './components/post/comentarios/comentarios.component';
import { AuthComponent } from './components/auth/auth.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { SharedService } from './service/shared.service'

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PostComponent,
    ComentariosComponent,
    AuthComponent,
    UsuariosComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
