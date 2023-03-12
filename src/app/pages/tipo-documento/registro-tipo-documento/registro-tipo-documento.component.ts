import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoDocumento } from 'src/app/model/tipo-documento';
import { EnvioDatosServiceService } from 'src/app/services/envio-datos-service.service';
import { TipoDocumentoServiceRestService } from 'src/app/services/tipo-documento-service-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-tipo-documento',
  templateUrl: './registro-tipo-documento.component.html',
  styleUrls: ['./registro-tipo-documento.component.css']
})
export class RegistroTipoDocumentoComponent {


  formulario_tipo_documento = new FormGroup({
    'codigo' : new FormControl('', [Validators.required,Validators.maxLength(20)]),
    'nombre' : new FormControl('', [Validators.required,Validators.maxLength(100)]),
    'descripcion' : new FormControl('', [Validators.required,Validators.maxLength(200)])
  });
  get codigo(){
    return this.formulario_tipo_documento.get('codigo') as FormControl;
  }
  get nombre(){
    return this.formulario_tipo_documento.get('nombre') as FormControl;
  }
  get descripcion(){
    return this.formulario_tipo_documento.get('descripcion') as FormControl;
  }

  documento!:TipoDocumento;
  //BOTONES
  boton1=false;
  boton2=true;

  constructor(
    private envio_datos: EnvioDatosServiceService,
    private router: Router,
    private tipo_documento_rest:TipoDocumentoServiceRestService
  ){

  }

  registrarDocumento(){
    this.boton1=true;
    this.boton2=false;
    this.documento = new TipoDocumento();
    this.documento.codigo = this.codigo.value;
    this.documento.nombre = this.nombre.value;
    this.documento.descripcion = this.descripcion.value;
    this.documento.estado = true;
    this.tipo_documento_rest.registrarDocumento(this.documento).subscribe({
      next: (data:any)=>{
        if(data.data!=null){
          Swal.fire(
            'Registrado!',
            data.data.nombre + " fue registrado correctamente!",
            'success'
          ).then((result:any)=>{
            if(result.isConfirmed){
              this.boton1=false;
              this.boton2=true;
              this.router.navigate(['/lista-tipo-documento']);
            }
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message
          }).then((result:any)=>{
            if(result.isConfirmed){
              this.boton1=false;
              this.boton2=true;
            }
          });
        }
      },
      error: (error:any)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        }).then((result:any)=>{
          if(result.isConfirmed){
            this.boton1=false;
            this.boton2=true;
          }
        });
      }
    });
  }

}
