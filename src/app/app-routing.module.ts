import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { PostComponent } from './components/post/post.component'
import { ComentariosComponent } from './components/post/comentarios/comentarios.component'
import { AuthComponent } from './components/auth/auth.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component'
import { ErrorComponent } from './components/error/error.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'comentarios', component: ComentariosComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
