import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entidad } from '../model/entidad';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EntidadServiceRestService {

  constructor(
    private http:HttpClient
  ) { 

  }

  listarEntidades() {
    return this.http
    .get(`${URL}/api/entidad/lista`)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  registrarEntidad(entidad:Entidad) {
    return this.http
    .post(`${URL}/api/entidad/registrar_entidad`, entidad)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  actualizarEntidad(entidad:Entidad) {
    return this.http
    .put(`${URL}/api/entidad/actualizar_entidad`, entidad)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  eliminarEntidad(id:string){
    return this.http
    .delete(`${URL}/api/entidad/${id}`)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }

}
