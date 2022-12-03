import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  constructor(public service:ControllerService,public router:Router) { 
    this.service.menuPrincipal = true;
    this.service.menuAutor = false;
  }

  ngOnInit(): void {
    this.service.getLivros();
  }

}
