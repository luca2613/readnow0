import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public service:ControllerService, private route:Router, private router: ActivatedRoute) {
    this.service.menuPrincipal = false;
    this.service.menuAutor = true;
  }

  token = this.service.getToken();
  id = this.service.getId();

  ngOnInit(): void {
    this.service.getAutorProfile(this.id);
    if(!this.token) {
      this.logout();
    }
  }
  logout() {    
    localStorage.clear();
    this.route.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }

}
