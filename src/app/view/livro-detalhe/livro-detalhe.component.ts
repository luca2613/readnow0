import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  constructor(public service:ControllerService,public router:ActivatedRoute) {
    this.service.menuPrincipal = true;
    this.service.menuAutor = false;
   }

  id:string | null = null;
  categoria:string | null = null;

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.categoria = params['categoria'];
    });

    this.service.getLivroById(this.id);
    this.service.getLivroByCategoria(this.categoria);
  }

}
