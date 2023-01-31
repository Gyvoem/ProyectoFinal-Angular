import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 // Crear una instancia de HttpClient
 constructor(private http: HttpClient) { }

 // Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)

 // Metodos GET para obtener datos de la API users

 getUsersAll():Observable<Users[]>{
   let apiUser = environment.apiUrl + 'vista/';
   return this.http.get<Users[]>(apiUser);
 }

 // Metodo GET para el Interceptor
 getUsersAllInterceptor():Observable<any>{
   let apiUser = environment.apiUrl + 'vista/';
   return this.http.get(apiUser, {observe: 'response'});
 }


 getUserId(userId: string): Observable<Users[]> {
   let apiUser = environment.apiUrl + 'buscar/' + userId;
   return this.http.get<Users[]>(apiUser);
 }

 // Metodo POSt para enviar datos a la API users

 postUser(usuario: Users): Observable<Users>{
   let apiUser = environment.apiUrl + 'nuevo/';
   return this.http.post<Users>(apiUser, usuario);
 }

}
