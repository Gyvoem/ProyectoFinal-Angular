import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})

export class LoginComponent {
  constructor(private autentificacion: AutenticacionService, private router: Router, private formbuilder: FormBuilder) { }

  dataLogin: any = 
  { 
    usuario: 'unite', 
    password: '123456',
    email:'unite@gmail.com',
    nombres:'Luz | Jhym', 
    apellidos: 'Toribio | stony'
  };
  

  errorLogin = "";
 
  registroform = this.formbuilder.group({
    usuario: ['', {validators:
      [
        Validators.required
      ]
    }],
    password: ['', {validators:
      [
        Validators.required,
        Validators.minLength(6)
      ]
    }],
  })
  get usuario() { return this.registroform.get('usuario') }
  get password() { return this.registroform.get('password') }

  urlRedireccion = ""

  ngOnInit(): void {}


  login() {
    console.log(this.registroform.get('usuario')?.value +"----"+ this.registroform.get('password')?.value);
    if (this.registroform.get('usuario')?.value === this.dataLogin.usuario && this.registroform.get('password')?.value === this.dataLogin.password) {
      this.autentificacion.login()
      this.urlRedireccion = this.autentificacion.urlUsuarioIntentaAcceder
      this.autentificacion.urlUsuarioIntentaAcceder = ''
      this.router.navigate(["home"])
    }else
      this.errorLogin = 'Los datos inválidos.'
  }
}
