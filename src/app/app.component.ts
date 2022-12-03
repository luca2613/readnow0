import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerService } from './controller/controller.service';
import { CategoriaResponse } from 'src/app/model/Categoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public service:ControllerService,public router:Router){}
  search: string = '';
  
  ngOnInit(): void {
    this.service.getCategorias();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }

  buscar() {
    if(this.search != "") {
      this.router.navigate(
        ['/livros/busca',this.search],
      );
      this.search = '';
    }
  }
}
