import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoDocumento } from '../model/tipo-documento';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoServiceRestService {

  constructor(
    private http:HttpClient
  ) { 

  }

  listarDocumentos() {
    return this.http
    .get(`${URL}/api/tipo_documento/lista`)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  registrarDocumento(documento:TipoDocumento) {
    return this.http
    .post(`${URL}/api/tipo_documento/registrar_tipo_documento`, documento)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  actualizarDocumento(documento:TipoDocumento) {
    return this.http
    .put(`${URL}/api/tipo_documento/actualizar_tipo_documento`, documento)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }
  eliminarDocumento(id:string){
    return this.http
    .delete(`${URL}/api/tipo_documento/${id}`)
    .pipe(
      catchError((err) => {
        return err;
      })
    );
  }

  obtenerDocumentoPorId(id:string): Observable<TipoDocumento>{
    return this.http.get<TipoDocumento>(`${URL}/api/tipo_documento/${id}`);
  }

}
