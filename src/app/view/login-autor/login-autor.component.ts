import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-login-autor',
  templateUrl: './login-autor.component.html',
  styleUrls: ['./login-autor.component.css']
})
export class LoginAutorComponent implements OnInit {

  constructor(private service:ControllerService, private router: Router) { 
    this.service.menuPrincipal = false;
    this.service.menuAutor = false;
  }

  ngOnInit(): void {
  }

  errmsg:any;
  errmsgshow=false;
  loginForm = new FormGroup({
  email:new FormControl('',Validators.required),
  senha:new FormControl('',Validators.required),
  });
  
  loginSubmit() {
    if(this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe((res) => {
        if(res.status == true) {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('nome', res.result.nome);
          localStorage.setItem('id', res.result.id_autor);
          localStorage.setItem('email', res.result.email);
          this.router.navigate(['painel']);
        } else {
          this.errmsgshow = true;
          this.errmsg = res.mensagem;
        }
      })

    } else {
      this.errmsgshow = true;
      this.errmsg = 'Preencha todos os campos!';
    }
  }
}
