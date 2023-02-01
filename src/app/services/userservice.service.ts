import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
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


//  apiUrl = environment.apiUrl + 'users'

 // Metodos GET para obtener datos de la API users

getUsersAll():Observable<Users[]>{
   let apiUser = environment.apiUrl + 'vista/';
   return this.http.get<Users[]>(apiUser);
 } 

 //******** */
 // Metodo GET para el Interceptor

 getUsuariosInterceptor():Observable<any>{
  let apiUrl = 'http://jsonplaceholder.typicode.com/users'

  return this.http.get(apiUrl, {observe: 'response'});
 }

}
