import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { ErrorComponent } from './principal/error/error.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { NotfoundComponent } from './principal/notfound/notfound.component';
import { PerfilComponent } from './principal/perfil/perfil.component';
import { UsuariosComponent } from './principal/usuarios/usuarios.component';

const routes: Routes = [
  {path:'', component: LoginComponent, title:'Iniciar sesion'},
  {path:'login', component: LoginComponent, title:'Iniciar sesion'},
  {path:'error', component: ErrorComponent, title:'Sin permisos'},

  {path:'home/:username', component: HomeComponent, title:'Home ALL', canActivate: [CanactivateGuard]},
  {path:'home', component: HomeComponent, title:'Home', canActivate:[CanactivateGuard]},

  {path:'usuarios', component: UsuariosComponent, title:'Usuarios', canActivate:[CanactivateGuard], canDeactivate:[CandesactivateGuard]},

  {path:'contacto', component: ContactoComponent, title:'Contacto', canActivate:[CanactivateGuard], canDeactivate:[CandesactivateGuard]},

  {path:'perfil', component: PerfilComponent, title:'Perfil visto', canActivate:[CanactivateGuard]},

  {path:'**', component: NotfoundComponent, title: 'Pagina no encontrada'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
