import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { LivrosComponent } from './view/livros/livros.component';
import { LivroDetalheComponent } from './view/livro-detalhe/livro-detalhe.component';
import { LivrosCategoriaComponent } from './view/livros-categoria/livros-categoria.component';
import { LoginAutorComponent } from './view/login-autor/login-autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControllerService } from './controller/controller.service';
import { AutorDetalheComponent } from './view/autor-detalhe/autor-detalhe.component';
import { AutorPainelComponent } from './view/autor-painel/autor-painel.component';
import { EditarLivroComponent } from './view/editar-livro/editar-livro.component';
import { LivroBuscaComponent } from './view/livro-busca/livro-busca.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { PerfilComponent } from './view/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivrosComponent,
    LivroDetalheComponent,
    LivrosCategoriaComponent,
    LoginAutorComponent,
    AutorDetalheComponent,
    AutorPainelComponent,
    EditarLivroComponent,
    LivroBuscaComponent,
    CadastroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
