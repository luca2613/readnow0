import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorDetalheComponent } from './view/autor-detalhe/autor-detalhe.component';
import { AutorPainelComponent } from './view/autor-painel/autor-painel.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { EditarLivroComponent } from './view/editar-livro/editar-livro.component';
import { HomeComponent } from './view/home/home.component';
import { LivroBuscaComponent } from './view/livro-busca/livro-busca.component';
import { LivroDetalheComponent } from './view/livro-detalhe/livro-detalhe.component';
import { LivrosCategoriaComponent } from './view/livros-categoria/livros-categoria.component';
import { LivrosComponent } from './view/livros/livros.component';
import { LoginAutorComponent } from './view/login-autor/login-autor.component';
import { PerfilComponent } from './view/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'livros', component: LivrosComponent},
  {path: 'livro', component: LivroDetalheComponent},
  {path: 'livros/:nm_categoria', component: LivrosCategoriaComponent},
  {path: 'livros/busca/:search', component: LivroBuscaComponent},
  {path: 'login', component: LoginAutorComponent},
  {path: 'autor', component: AutorDetalheComponent},
  {path: 'painel', component: AutorPainelComponent},
  {path: 'editar/:cd_livro', component: EditarLivroComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
