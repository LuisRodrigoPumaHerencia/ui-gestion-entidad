import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Entidad } from 'src/app/model/entidad';
import { TipoContribuyente } from 'src/app/model/tipo-contribuyente';
import { TipoDocumento } from 'src/app/model/tipo-documento';
import { EntidadServiceRestService } from 'src/app/services/entidad-service-rest.service';
import { EnvioDatosServiceService } from 'src/app/services/envio-datos-service.service';
import { TipoContribuyenteServiceRestService } from 'src/app/services/tipo-contribuyente-service-rest.service';
import { TipoDocumentoServiceRestService } from 'src/app/services/tipo-documento-service-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizacion-entidad',
  templateUrl: './actualizacion-entidad.component.html',
  styleUrls: ['./actualizacion-entidad.component.css']
})
export class ActualizacionEntidadComponent {
  formulario_entidad = new FormGroup({
    'id_tipo_documento': new FormControl('', [Validators.required]),
    'nro_documento' : new FormControl('', [Validators.required,Validators.maxLength(25)]),
    'razon_social' : new FormControl('', [Validators.required,Validators.maxLength(100)]),
    'nombre_comercial' : new FormControl('', [Validators.maxLength(100)]),
    'id_tipo_contribuyente': new FormControl('', [Validators.required]),
    'direccion' : new FormControl('', [Validators.maxLength(250)]),
    'telefono' : new FormControl('', [Validators.maxLength(50)]),
  });
  get id_tipo_documento(){
    return this.formulario_entidad.get('id_tipo_documento') as FormControl;
  }
  get nro_documento(){
    return this.formulario_entidad.get('nro_documento') as FormControl;
  }
  get razon_social(){
    return this.formulario_entidad.get('razon_social') as FormControl;
  }
  get nombre_comercial(){
    return this.formulario_entidad.get('nombre_comercial') as FormControl;
  }
  get id_tipo_contribuyente(){
    return this.formulario_entidad.get('id_tipo_contribuyente') as FormControl;
  }
  get direccion(){
    return this.formulario_entidad.get('direccion') as FormControl;
  }
  get telefono(){
    return this.formulario_entidad.get('telefono') as FormControl;
  }

  //ENTIDAD
  entidad!:Entidad;

  id_entidad!:string;
  //LISTAS
  contribuyentes!:TipoContribuyente[];
  documentos!:TipoDocumento[];

  //BOTONES
  boton1=false;
  boton2=true;

  constructor(
    private tipo_documento_rest:TipoDocumentoServiceRestService,
    private tipo_contribuyente_rest:TipoContribuyenteServiceRestService,
    private entidad_rest:EntidadServiceRestService,
    private router: Router,
    private envio_datos: EnvioDatosServiceService
  ){
    this.recibiendoDatos();
    this.listarContribuyentes();
    this.listarDocumentos();
  }

  recibiendoDatos(){
    this.envio_datos.$getObjectSource.subscribe((data:any)=>{
      let recibido = data.toString().split(",");
      this.id_entidad=recibido[0];
      this.id_tipo_documento.setValue(recibido[1]);
      this.nro_documento.setValue(recibido[2]);
      this.razon_social.setValue(recibido[3]);
      this.nombre_comercial.setValue(recibido[4]);
      this.id_tipo_contribuyente.setValue(recibido[5]);
      this.direccion.setValue(recibido[6]);
      this.telefono.setValue(recibido[7]);

    });
  }

  actualizarEntidad(){
    this.boton1=true;
    this.boton2=false;
    forkJoin([
      this.tipo_documento_rest.obtenerDocumentoPorId(this.id_tipo_documento.value),
      this.tipo_contribuyente_rest.obtenerContribuyentePorId(this.id_tipo_contribuyente.value)
    ]).subscribe({
      next:([data,data2])=>{
        this.entidad = new Entidad();
        this.entidad.idEntidad=this.id_entidad;
        this.entidad.tipoDocumento = data;
        this.entidad.nroDocumento = this.nro_documento.value;
        this.entidad.razonSocial = this.razon_social.value;
        this.entidad.nombreComercial = this.nombre_comercial.value;
        this.entidad.tipoContribuyente = data2;
        this.entidad.direccion = this.direccion.value;
        this.entidad.telefono = this.telefono.value;
        this.entidad.estado = true;
        this.entidad_rest.actualizarEntidad(this.entidad).subscribe({
          next: (data:any)=>{
            if(data.data!=null){
              Swal.fire(
                'Actualizado!',
                "La entidad fue actualizada correctamente!",
                'success'
              ).then((result:any)=>{
                if(result.isConfirmed){
                  this.boton1=false;
                  this.boton2=true;
                  this.router.navigate(['/lista-entidad']);
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
      error: (error:any)=>{
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
    })
  }

  listarContribuyentes(){
    this.tipo_contribuyente_rest.listarContribuyentes().subscribe({
      next: (data:any)=>{
        if(data.data!=null){
          this.contribuyentes=data.data;
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message
          });
        }
      },
      error: (error:any)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        });
      }
    });
  }
  listarDocumentos(){
    this.tipo_documento_rest.listarDocumentos().subscribe({
      next: (data:any)=>{
        if(data.data!=null){
          this.documentos=data.data;
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message
          });
        }
      },
      error: (error:any)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        });
      }
    });
  }
}
