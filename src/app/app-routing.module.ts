import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizacionEntidadComponent } from './pages/entidad/actualizacion-entidad/actualizacion-entidad.component';
import { ListaEntidadComponent } from './pages/entidad/lista-entidad/lista-entidad.component';
import { RegistroEntidadComponent } from './pages/entidad/registro-entidad/registro-entidad.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ActualizacionTipoContribuyenteComponent } from './pages/tipo-contribuyente/actualizacion-tipo-contribuyente/actualizacion-tipo-contribuyente.component';
import { ListaTipoContribuyenteComponent } from './pages/tipo-contribuyente/lista-tipo-contribuyente/lista-tipo-contribuyente.component';
import { RegistroTipoContribuyenteComponent } from './pages/tipo-contribuyente/registro-tipo-contribuyente/registro-tipo-contribuyente.component';
import { ActualizacionTipoDocumentoComponent } from './pages/tipo-documento/actualizacion-tipo-documento/actualizacion-tipo-documento.component';
import { ListaTipoDocumentoComponent } from './pages/tipo-documento/lista-tipo-documento/lista-tipo-documento.component';
import { RegistroTipoDocumentoComponent } from './pages/tipo-documento/registro-tipo-documento/registro-tipo-documento.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'lista-entidad',
        component: ListaEntidadComponent
      },
      {
        path: 'registro-entidad',
        component: RegistroEntidadComponent
      },
      {
        path: 'actualizacion-entidad',
        component: ActualizacionEntidadComponent
      },
      {
        path: 'lista-tipo-contribuyente',
        component: ListaTipoContribuyenteComponent
      },
      {
        path: 'registro-tipo-contribuyente',
        component: RegistroTipoContribuyenteComponent
      },
      {
        path: 'actualizacion-tipo-contribuyente',
        component: ActualizacionTipoContribuyenteComponent
      },
      {
        path: 'lista-tipo-documento',
        component: ListaTipoDocumentoComponent
      },
      {
        path: 'registro-tipo-documento',
        component: RegistroTipoDocumentoComponent
      },
      {
        path: 'actualizacion-tipo-documento',
        component: ActualizacionTipoDocumentoComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
