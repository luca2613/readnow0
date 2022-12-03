import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CategoriaResponse } from '../model/Categoria';
import { LivroResponse, Livro } from '../model/Livro';
import { Autor, AutorResponse } from '../model/Autor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  menuPrincipal!: boolean;
  menuAutor!: boolean;

  apiUrl = 'https://api-node-production.up.railway.app';
  
  categoria: CategoriaResponse[] | null = null;
  livro: LivroResponse[] | null = null;
  livroCategoria: LivroResponse[] | null = null;
  livroBusca: LivroResponse[] | null = null;
  livroAutor: LivroResponse[] | null = null;
  autor: Autor[] | null = null;
  autorProfile: Autor[] | null = null;
  livroRecomendado: LivroResponse[] | null = null;

  constructor(private http:HttpClient) { }


  login(data:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/autor/login`,data);
  }
  

  cadastro(data:any):Observable<any> { 
    return this.http.post(`${this.apiUrl}/autor/cadastro`,data);
  }

  getToken() {
    return localStorage.getItem('token');
  } 

  getId() {
    return localStorage.getItem('id');
  }

  getNome() {
    return localStorage.getItem('nome');
  }
  

  // categoria
  getCategorias() {
    this.http.get<CategoriaResponse[]>(
      this.apiUrl + "/categorias"
    ).subscribe(
      (response) => {
        this.categoria = response;
      },
    );
    return false;
  }

  // autor

  getAutorById(id:any) {
    this.http.get<Autor[]>(
      this.apiUrl + "/autor/" + id
    ).subscribe(
      (response) => {
        this.autor = response;
      },
    );
    return false;
  }

  //autor

  getAutorProfile(id:any) {
    this.http.get<Autor[]>(
      this.apiUrl + "/autor/perfil/" + id
    ).subscribe(
      (response) => {
        this.autorProfile = response;
      },
    );
    return false;
  }

  // livros
  getLivrosByLast() {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/lastLivros"
    ).subscribe(
      (response) => {
        this.livro = response;
      },
    );
    return false;
  }

  getLivros() {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros"
    ).subscribe(
      (response) => {
        this.livro = response;
      },
    );
    return false;
  }

  getLivroById(id:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/" + id
    ).subscribe(
      (Response) => {
        this.livro = Response;
      }
    )
    return false;
  }

  getLivroByCategoria(nome:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/categoria/" + nome
    ).subscribe(
      (Response) => {
        this.livroCategoria = Response;
      }
    )
    return false;
  }

  getLivroRecomendado(nome:any, id:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/recomendado/" + nome + "/" + id
    ).subscribe(
      (Response) => {
        this.livroRecomendado = Response;
      }
    )
    return false;
  }

  getLivroByBusca(busca:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/busca/" + busca
    ).subscribe(
      (Response) => {
        this.livroBusca = Response;
      }
    )
    return false;
  }

  getLivrosByAutor(id:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/livrosAutor/" + id,
    ).subscribe(
      (Response) => {
        this.livroAutor = Response;
      },
    )
    return false;
  }

  postLivro(livroInfo: Livro){

    const requestPkg: Livro = {
      cd_autor: livroInfo.cd_autor,
      cd_categoria: livroInfo.cd_categoria,
      nm_livro: livroInfo.nm_livro,
      ds_livro: livroInfo.ds_livro,
      dt_lancamento: livroInfo.dt_lancamento,
      cd_img_livro: livroInfo.cd_img_livro
    };
    console.log(requestPkg);

    this.http.post<Livro>(
      this.apiUrl + '/livros', requestPkg, {
        headers: { 'Authorization': 'Bearer ' + this.getToken() },
      },
    ).subscribe(
      (data) => {
        this.getLivrosByAutor(this.getId());
        alert("livro cadastrado!")
      },
      (error) => {
        alert(error)
      }
    );
  }

  patchLivro(data:any,id:any):Observable<any> { 
    return this.http.patch(`${this.apiUrl}/livros/${id}`,data, {headers: { 'Authorization': 'Bearer ' + this.getToken() }});
  }

  deleteLivro( id: any, autor:any) {
    this.http.delete(
      this.apiUrl + '/livros/' + id, {
        headers: { 'Authorization': 'Bearer ' + this.getToken() },
      }
    ).subscribe(
      (response) => {
        this.getLivrosByAutor(autor);
      },
      (error) => {
        alert(error);
      }
    );
  }

}
