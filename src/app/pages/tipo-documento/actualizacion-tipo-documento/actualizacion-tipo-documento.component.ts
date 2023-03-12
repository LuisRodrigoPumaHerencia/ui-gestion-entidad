import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoDocumento } from 'src/app/model/tipo-documento';
import { EnvioDatosServiceService } from 'src/app/services/envio-datos-service.service';
import { TipoDocumentoServiceRestService } from 'src/app/services/tipo-documento-service-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizacion-tipo-documento',
  templateUrl: './actualizacion-tipo-documento.component.html',
  styleUrls: ['./actualizacion-tipo-documento.component.css']
})
export class ActualizacionTipoDocumentoComponent {

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

  id!:string;

  nuevo_tipo_documento!:TipoDocumento;
  //BOTONES
  boton1=false;
  boton2=true;

  constructor(
    private envio_datos: EnvioDatosServiceService,
    private router: Router,
    private tipo_documento_rest:TipoDocumentoServiceRestService
  ){
    this.recibiendoDatos();
  }

  recibiendoDatos(){
    this.envio_datos.$getObjectSource.subscribe((data:any)=>{
      let recibido = data.toString().split(",");
      
      this.id = recibido[0];
      this.codigo.setValue(recibido[1])
      this.nombre.setValue(recibido[2]);
      this.descripcion.setValue(recibido[3]);
    });
  }

  actualizarDocumento(){
    this.boton1=true;
    this.boton2=false;
    this.tipo_documento_rest.obtenerDocumentoPorId(this.id).subscribe({
      next: (data:any)=>{
          this.nuevo_tipo_documento=data;
          this.nuevo_tipo_documento.codigo = this.codigo.value;
          this.nuevo_tipo_documento.nombre = this.nombre.value;
          this.nuevo_tipo_documento.descripcion = this.descripcion.value;
          this.nuevo_tipo_documento.estado = true;
          this.tipo_documento_rest.actualizarDocumento(this.nuevo_tipo_documento).subscribe({
            next: (data:any)=>{
              if(data.data!=null){
                Swal.fire(
                  'Actualizado!',
                  data.data.nombre + " fue actualizado correctamente!",
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
      },
      error:(error:any)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message
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
