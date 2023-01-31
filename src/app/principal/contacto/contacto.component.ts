import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
 
    save:boolean = false;
    enviado = false;
    menj: boolean | undefined;
  
    constructor(private autentificacion: AutenticacionService, private router: Router, private formbuilder: FormBuilder) { }
  
  
    registroform = this.formbuilder.group({
      nombre: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }],
      mensaje: ['', {
        validators: [
          Validators.required,
          Validators.maxLength(500),
          Validators.minLength(10)
        ]
      }]
    })
  
    ngOnInit(){
      this.enviado = false;
      
  
    }
    get nombre() { return this.registroform.get('nombre') }
    get email() { return this.registroform.get('email') }
    get mensaje() { return this.registroform.get('mensaje') }
  
    
    EnviarMensaje() {
      alert('Mensaje: ' + '\n enviado exitosamente!!' );
      this.enviado = true;
      this.save = true;
      this.menj = true
    }
    
  
  
    SalirDeRuta(): Observable<boolean> | boolean {
      if (this.enviado) {
        return true;
        
      }
      if(this.registroform.dirty){
        const confirmar = confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
        return confirmar;
     
      }
      return true ;
      
    }
    Refrescar(){
      location.reload();
      
    }
    
}
