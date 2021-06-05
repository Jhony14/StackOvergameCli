import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FileUploadModule } from 'ng2-file-upload';


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
import { InformesComponent } from './components/informes/informes.component';
import { EditShowUserComponent } from './components/usuarios/edit-show-user/edit-show-user.component';
import { AddEditPostComponent } from './components/post/add-edit-post/add-edit-post.component';
import { AddEditComentariosComponent } from './components/post/add-edit-comentarios/add-edit-comentarios.component';
import { GuideComponent } from './components/guide/guide.component';
import { NewsComponent } from './components/news/news.component';
import { ViewComponent } from './components/news/view/view.component';
import { AddEditComponent } from './components/news/add-edit/add-edit.component';
import { ShowGuideComponent } from './components/guide/show-guide/show-guide.component';
import { AddEditGuideComponent } from './components/guide/add-edit-guide/add-edit-guide.component';




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
    InformesComponent,
    EditShowUserComponent,
    AddEditPostComponent,
    AddEditComentariosComponent,
    GuideComponent,
    NewsComponent,
    ViewComponent,
    AddEditComponent,
    ShowGuideComponent,
    AddEditGuideComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    FileUploadModule,
  ],
  providers: [
    SharedService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
