import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-livro-busca',
  templateUrl: './livro-busca.component.html',
  styleUrls: ['./livro-busca.component.css']
})
export class LivroBuscaComponent implements OnInit {

  constructor(public service:ControllerService,public router:ActivatedRoute) {
    this.service.menuPrincipal = true;
    this.service.menuAutor = false;
   }
  search:any;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.search = this.router.snapshot.paramMap.get("search");
      this.service.getLivroByBusca(this.search);
    });
  }

}

