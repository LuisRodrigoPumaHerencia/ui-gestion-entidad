import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { map } from 'rxjs';
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class LoginRestService {

  constructor(
    private http:HttpClient
  ) { 

  }

  iniciarSesion(usuario:Usuario) {
    return this.http
    .post(`${URL}/login`, usuario, {
      observe: 'response'
    })
    .pipe(
      map((response: HttpResponse<any>)=>{
        const body = response.body;
        const headers = response.headers;

        const bearerToken = headers.get('Authorization')!;
        const token = bearerToken.replace('Bearer','');
        localStorage.setItem('token', token);
        return body;
      })
    );
  }
  
  getToken(){
    return localStorage.getItem('token');
  }

}
