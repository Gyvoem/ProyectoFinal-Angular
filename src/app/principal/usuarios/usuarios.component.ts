import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  constructor(private userService: UserserviceService){}

  // Crear objeto que se evniara a al api
  datos: Users[] = 
      [
        {Id: '', Nombre: '', Apellido:'', Correo:''}
      ];
  
  onSubmit(){
    this.userService.postUser(this.datos[0]).subscribe();
  }
}
