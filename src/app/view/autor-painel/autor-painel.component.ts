import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-autor-painel',
  templateUrl: './autor-painel.component.html',
  styleUrls: ['./autor-painel.component.css']
})
export class AutorPainelComponent implements OnInit {


  constructor(public service:ControllerService,private route:Router, private router: ActivatedRoute,private http: HttpClient, private sanitization: DomSanitizer) { 
    this.service.menuPrincipal = false;
    this.service.menuAutor = true;
  }

  
  isVisible: boolean = false;

  token = this.service.getToken();
  id = this.service.getId();
  nome = this.service.getNome();
  select:any;
  images:any = '';
  nm_livro: string = '';
  ds_livro:string = '';
  dt_lancamento: string = '';
  path:any;
  
  changeSelect(e:any) {
    this.select = e.target.value;
  }

  ngOnInit(): void {
    if(!this.token) {
      this.logout();
    }
    this.service.getLivrosByAutor(this.id);
    this.service.getCategorias();
    
  }

  logout() {    
    localStorage.clear();
    this.route.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }

  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images);
    }
  }

  show(): void{
    this.isVisible = !this.isVisible;
  }

  upload(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>(this.service.apiUrl + '/livros/file', formData).subscribe(
      (res) => console.log(res),
    );
  }

  cadastroLivro(): void{
    console.log(this.service.getId());
    this.service.postLivro(
      {  
        cd_autor: this.service.getId(),
        cd_categoria: this.select,
        nm_livro: this.nm_livro,
        ds_livro: this.ds_livro,
        dt_lancamento: this.dt_lancamento,
        cd_img_livro: this.images.name
      });
    this.upload();  
    this.nm_livro = '';
    this.ds_livro = '';
    this.isVisible = false;
  }
}
