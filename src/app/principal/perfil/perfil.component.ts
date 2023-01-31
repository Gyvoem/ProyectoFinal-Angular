import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  constructor( private autentificacion: AutenticacionService, private rutaActiva: ActivatedRoute) { }
  

}
