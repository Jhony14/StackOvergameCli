import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { GuideComponent } from './components/guide/guide.component';
import { ComentariosComponent } from './components/post/comentarios/comentarios.component';
import { AuthComponent } from './components/auth/auth.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { InformesComponent } from './components/informes/informes.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { ShowGuideComponent } from './components/guide/show-guide/show-guide.component';
import { EditShowUserComponent } from './components/usuarios/edit-show-user/edit-show-user.component';
import { NewsComponent } from './components/news/news.component';
import { ViewComponent } from './components/news/view/view.component';
import { CookiesComponent } from './components/cookies/cookies.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'comentarios', component: ComentariosComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'edit-profile', component: EditShowUserComponent },
  { path: 'show-post/:id', component: ShowPostComponent },
  { path: 'guias', component: GuideComponent },
  { path: 'show-guia/:id', component: ShowGuideComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'cookies-law', component: CookiesComponent },
  { path: 'show-noticias/:id', component: ViewComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
