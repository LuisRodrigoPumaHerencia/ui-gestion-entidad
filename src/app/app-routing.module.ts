import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
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
        component: ListaEntidadComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'registro-entidad',
        component: RegistroEntidadComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'actualizacion-entidad',
        component: ActualizacionEntidadComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'lista-tipo-contribuyente',
        component: ListaTipoContribuyenteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'registro-tipo-contribuyente',
        component: RegistroTipoContribuyenteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'actualizacion-tipo-contribuyente',
        component: ActualizacionTipoContribuyenteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'lista-tipo-documento',
        component: ListaTipoDocumentoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'registro-tipo-documento',
        component: RegistroTipoDocumentoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'actualizacion-tipo-documento',
        component: ActualizacionTipoDocumentoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'inicio',
        component: InicioComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
