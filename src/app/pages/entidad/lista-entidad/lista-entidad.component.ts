import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/model/entidad';
import { EntidadServiceRestService } from 'src/app/services/entidad-service-rest.service';
import { EnvioDatosServiceService } from 'src/app/services/envio-datos-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-entidad',
  templateUrl: './lista-entidad.component.html',
  styleUrls: ['./lista-entidad.component.css']
})
export class ListaEntidadComponent {

  displayedColumns: string[] = ['tipo_documento', 'nro_documento', 'razon_social', 'nombre_comercial', 'tipo_contribuyente', 'direccion', 'telefono', 'acciones'];
  dataSource!:MatTableDataSource<Entidad>;

  entidades!:Entidad[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private router:Router,
    private envio_datos: EnvioDatosServiceService,
    private entidad_rest:EntidadServiceRestService
  ){
    this.listarEntidades();
  }

  listarEntidades(){
    this.entidad_rest.listarEntidades().subscribe({
      next: (data:any)=>{
        if(data.data!=null){
          this.entidades=data.data;
          this.dataSource = new MatTableDataSource<Entidad>(this.entidades);
          this.dataSource.paginator=this.paginator;
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

  irRegistrarEntidad(){
    this.router.navigate(['/registro-entidad']);
  }

  obtenerEntidad(idEntidad:string, idTipoDocumento:string, nroDocumento:string, razonSocial:string, nombreComercial:string, idTipoContribuyente:string, direccion:string, telefono:string){
    let datosEnviar: string[] = [idEntidad, idTipoDocumento, nroDocumento, razonSocial, nombreComercial, idTipoContribuyente, direccion, telefono];
    this.envio_datos.sendObjectSource(datosEnviar);
    this.router.navigate(['/actualizacion-entidad']);
  }

  eliminarEntidad(id:string){
    Swal.fire({
      title: '¿Estás seguro de eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.entidad_rest.eliminarEntidad(id).subscribe({
          next:(data:any)=>{
            if(data.data!=null){
              Swal.fire(
                'Eliminado!',
                'La entidad fue eliminada',
                'success'
              ).then((result:any)=>{
                if(result.isConfirmed){
                  this.listarEntidades();
                }
              });
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message
              });
            }
          },
          error:(error:any)=>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error
            });
          }
        });
      }
    });
  }
}
