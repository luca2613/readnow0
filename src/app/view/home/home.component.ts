import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service:ControllerService,public router:Router) {
    this.service.menuPrincipal = true;
    this.service.menuAutor = false;
   }

  ngOnInit(): void {
    this.service.getLivrosByLast();
  }

}
