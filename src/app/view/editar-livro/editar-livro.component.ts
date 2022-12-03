import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';
import { LivroResponse } from 'src/app/model/Livro';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  constructor(public service:ControllerService,private route:Router, private router: ActivatedRoute,private http: HttpClient, private sanitization: DomSanitizer) {
    this.service.menuPrincipal = false;
    this.service.menuAutor = true;
  }
  token = this.service.getToken();
  id = this.service.getId();
  nome = this.service.getNome();
  select:any;
  images:any = '';
  nm_livro: string = '';
  ds_livro:string = '';
  dt_lancamento: string = '';
  path:any;
  idLivro:any;

  ngOnInit(): void {
    if(!this.token) {
      this.logout();
    }
    this.router.paramMap.subscribe((params) => {
      this.idLivro = this.router.snapshot.paramMap.get("cd_livro");
      this.service.getLivroById(this.idLivro);
    });
  }

  changeSelect(e:any) {
    this.select = e.target.value;
  }

  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images);
    }
  }

  takeN(e:any) {
    this.nm_livro = e.target.value;
  }

  takeD(e:any) {
    this.ds_livro = e.target.value;
  }

  upload(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>(this.service.apiUrl + '/livros/file', formData).subscribe(
      (res) => console.log(res),
    );
  }

  logout() {    
    localStorage.clear();
    this.route.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }

  updateLivro() {
    console.log(this.nm_livro)
    this.service.patchLivro({
      cd_categoria: this.select,
      nm_livro: this.nm_livro,
      ds_livro: this.ds_livro,
      dt_lancamento: this.dt_lancamento,
      cd_img_livro: this.images.name
    },this.idLivro).subscribe((res) => {
      if (res.status == true) {
        console.log(this.nm_livro);
        alert("alterado");
        this.upload(); 
        this.route.navigate(['painel']);
      } else {
        alert('erro');
      }
    });
    }

}