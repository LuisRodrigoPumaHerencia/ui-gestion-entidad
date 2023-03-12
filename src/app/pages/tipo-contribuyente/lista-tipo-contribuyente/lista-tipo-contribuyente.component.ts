import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/model/tipo-contribuyente';
import { EnvioDatosServiceService } from 'src/app/services/envio-datos-service.service';
import { TipoContribuyenteServiceRestService } from 'src/app/services/tipo-contribuyente-service-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tipo-contribuyente',
  templateUrl: './lista-tipo-contribuyente.component.html',
  styleUrls: ['./lista-tipo-contribuyente.component.css']
})
export class ListaTipoContribuyenteComponent {

  displayedColumns: string[] = ['nombre', 'acciones'];
  dataSource!:MatTableDataSource<TipoContribuyente>; 

  contribuyentes!:TipoContribuyente[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router:Router,
    private tipo_contribuyente_rest:TipoContribuyenteServiceRestService,
    private envio_datos: EnvioDatosServiceService
  ){
    this.listarContribuyentes();
  }

  listarContribuyentes(){
    this.tipo_contribuyente_rest.listarContribuyentes().subscribe({
      next: (data:any)=>{
        if(data.data!=null){
          this.contribuyentes=data.data;
          this.dataSource = new MatTableDataSource<TipoContribuyente>(this.contribuyentes);
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

  irRegistrarContribuyente(){
    this.router.navigate(['/registro-tipo-contribuyente']);
  }

  obtenerContribuyente(nombre:string, idTipoContribuyente:string){
    let datosEnviar: string[] = [nombre, idTipoContribuyente];
    this.envio_datos.sendObjectSource(datosEnviar);
    this.router.navigate(['/actualizacion-tipo-contribuyente']);
  }

  eliminarDocente(id:string){
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
        this.tipo_contribuyente_rest.eliminarContribuyente(id).subscribe({
          next:(data:any)=>{
            if(data.data!=null){
              Swal.fire(
                'Eliminado!',
                'El contribuyente ' + data.data.nombre +' fue eliminado',
                'success'
              ).then((result:any)=>{
                if(result.isConfirmed){
                  this.listarContribuyentes();
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
