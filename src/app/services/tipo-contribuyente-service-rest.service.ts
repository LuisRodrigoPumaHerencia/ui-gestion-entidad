import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TipoContribuyente } from '../model/tipo-contribuyente';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TipoContribuyenteServiceRestService {

  constructor(
    private http:HttpClient
  ) { 

  }
  listarContribuyentes() {
    return this.http
    .get(`${URL}/api/tipo_contribuyente/lista`)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  registrarContribuyente(contribuyente:TipoContribuyente) {
    return this.http
    .post(`${URL}/api/tipo_contribuyente/registrar_tipo_contribuyente`, contribuyente)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  actualizarContribuyente(contribuyente:TipoContribuyente) {
    return this.http
    .put(`${URL}/api/tipo_contribuyente/actualizar_tipo_contribuyente`, contribuyente)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  eliminarContribuyente(id:string){
    return this.http
    .delete(`${URL}/api/tipo_contribuyente/${id}`)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }

  obtenerContribuyentePorId(id:string): Observable<TipoContribuyente>{
    return this.http.get<TipoContribuyente>(`${URL}/api/tipo_contribuyente/${id}`);
  }

}
