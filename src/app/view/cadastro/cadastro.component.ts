import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  errmsg: any;
  errmsgshow = false;
  images:any = '';
  token = this.service.getToken();

  constructor(public service:ControllerService,public router:Router, private http: HttpClient, private sanitization: DomSanitizer) {
    this.service.menuPrincipal = false;
    this.service.menuAutor = false;
   }

   selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images);
    }
  }

  ngOnInit(): void {
    if(!this.token) {
      this.logout();
    }
  }

  logout() {    
    localStorage.clear();
    this.router.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }

  upload(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>(this.service.apiUrl + '/livros/file', formData).subscribe(
      (res) => console.log(res),
    );
  }

  nome: string = '';
  senha:string = '';
  email:string = '';
  descricao: string = '';
  tipo:number = 2;


  cadastroSubmit() {
  this.errmsgshow = false;
  console.log(this.images.name)
  this.service.cadastro({
    tipo: this.tipo,
    nome: this.nome,
    descricao: this.descricao,
    senha: this.senha,
    email: this.email,
    cd_img_autor: this.images.name
  }).subscribe((res) => {
    if (res.status == true) {
      alert("Cadastrado com sucesso!")
      this.upload(); 
      this.router.navigate(['login']);
    } else {
      alert('Erro')
      this.errmsgshow = true;
      this.errmsg = res.msg;
    }
  });
  }

}
