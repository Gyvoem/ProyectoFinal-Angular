import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {


  constructor(private servicio: UserserviceService){}
 
  listado = new Array();

  ngOnInit(){ 
    this.servicio.getUsuariosInterceptor().subscribe({
      next: (response: any) => {
        this.listado = response.body; 
        console.log(response)
      },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });   
  }
}
