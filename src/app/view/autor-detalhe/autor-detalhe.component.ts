import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-autor-detalhe',
  templateUrl: './autor-detalhe.component.html',
  styleUrls: ['./autor-detalhe.component.css']
})
export class AutorDetalheComponent implements OnInit {

  autor:any | null = null;

  constructor(public service:ControllerService,public router:ActivatedRoute) { 
    this.service.menuPrincipal = true;
    this.service.menuAutor = false;
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      this.autor = params['id'];
    });

    this.service.getAutorById(this.autor);
    this.service.getLivrosByAutor(this.autor);
  }
}
