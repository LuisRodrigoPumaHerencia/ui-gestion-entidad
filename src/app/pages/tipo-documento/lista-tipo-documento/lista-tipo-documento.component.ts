import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TipoDocumento } from 'src/app/model/tipo-documento';
import { EnvioDatosServiceService } from 'src/app/services/envio-datos-service.service';
import { TipoDocumentoServiceRestService } from 'src/app/services/tipo-documento-service-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tipo-documento',
  templateUrl: './lista-tipo-documento.component.html',
  styleUrls: ['./lista-tipo-documento.component.css']
})
export class ListaTipoDocumentoComponent {

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'acciones'];
  dataSource!:MatTableDataSource<TipoDocumento>;
  
  documentos!:TipoDocumento[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private envio_datos: EnvioDatosServiceService,
    private router: Router,
    private tipo_documento_rest:TipoDocumentoServiceRestService
  ){
    this.listarDocumentos();
  }

  listarDocumentos(){
    this.tipo_documento_rest.listarDocumentos().subscribe({
      next: (data:any)=>{
        console.log(data);
        if(data.data!=null){
          console.log(data.data);
          this.documentos=data.data;
          this.dataSource = new MatTableDataSource<TipoDocumento>(this.documentos);
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

  irRegistrarDocumento(){
    this.router.navigate(['/registro-tipo-documento']);
  }

  obtenerDocumento(idTipoDocumento:string, codigo:string, nombre:string, descripcion:string){
    let datosEnviar: string[] = [idTipoDocumento, codigo, nombre, descripcion];
    this.envio_datos.sendObjectSource(datosEnviar);
    this.router.navigate(['/actualizacion-tipo-documento']);
  }

  eliminarDocumento(idTipoDocumento:string){
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
        this.tipo_documento_rest.eliminarDocumento(idTipoDocumento).subscribe({
          next:(data:any)=>{
            if(data.data!=null){
              Swal.fire(
                'Eliminado!',
                'El documento de nombre ' + data.data.nombre +' fue eliminado',
                'success'
              ).then((result:any)=>{
                if(result.isConfirmed){
                  this.listarDocumentos();
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
