import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/model/tipo-contribuyente';
import { EnvioDatosServiceService } from 'src/app/services/envio-datos-service.service';
import { TipoContribuyenteServiceRestService } from 'src/app/services/tipo-contribuyente-service-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizacion-tipo-contribuyente',
  templateUrl: './actualizacion-tipo-contribuyente.component.html',
  styleUrls: ['./actualizacion-tipo-contribuyente.component.css']
})
export class ActualizacionTipoContribuyenteComponent {

  formulario_tipo_contribuyente = new FormGroup({
    'nombre' : new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  get nombre(){
    return this.formulario_tipo_contribuyente.get('nombre') as FormControl;
  }

  nuevo_tipo_contribuyente!:TipoContribuyente;
  id!:string;
  //BOTONES
  boton1=false;
  boton2=true;

  constructor(
    private envio_datos: EnvioDatosServiceService,
    private router: Router,
    private tipo_contribuyente_rest:TipoContribuyenteServiceRestService
  ){
    this.recibiendoDatos();
  }

  recibiendoDatos(){
    this.envio_datos.$getObjectSource.subscribe((data:any)=>{
      let recibido = data.toString().split(",");
      this.nombre.setValue(recibido[0]);
      this.id = recibido[1];
    });
  }

  actualizarContribuyente(){
    this.boton1=true;
    this.boton2=false;
    this.nuevo_tipo_contribuyente = new TipoContribuyente();
    this.nuevo_tipo_contribuyente.idTipoContribuyente = this.id;
    this.nuevo_tipo_contribuyente.nombre = this.nombre.value;
    this.nuevo_tipo_contribuyente.estado = true;
    this.tipo_contribuyente_rest.actualizarContribuyente(this.nuevo_tipo_contribuyente).subscribe({
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
              this.router.navigate(['/lista-tipo-contribuyente']);
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
