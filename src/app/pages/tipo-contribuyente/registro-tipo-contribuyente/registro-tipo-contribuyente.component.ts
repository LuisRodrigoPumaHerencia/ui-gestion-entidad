import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/model/tipo-contribuyente';
import { TipoContribuyenteServiceRestService } from 'src/app/services/tipo-contribuyente-service-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-tipo-contribuyente',
  templateUrl: './registro-tipo-contribuyente.component.html',
  styleUrls: ['./registro-tipo-contribuyente.component.css']
})
export class RegistroTipoContribuyenteComponent {

  formulario_tipo_contribuyente = new FormGroup({
    'nombre' : new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  get nombre(){
    return this.formulario_tipo_contribuyente.get('nombre') as FormControl;
  }

  contribuyente!:TipoContribuyente;
  //BOTONES
  boton1=false;
  boton2=true;
  
  constructor(
    private router:Router,
    private tipo_contribuyente_rest:TipoContribuyenteServiceRestService,
  ){

  }

  registrarContribuyente(){
    this.boton1=true;
    this.boton2=false;
    this.contribuyente = new TipoContribuyente();
    this.contribuyente.nombre = this.nombre.value;
    this.contribuyente.estado = true;
    this.tipo_contribuyente_rest.registrarContribuyente(this.contribuyente).subscribe({
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
