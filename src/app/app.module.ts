import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEntidadComponent } from './pages/entidad/lista-entidad/lista-entidad.component';
import { RegistroEntidadComponent } from './pages/entidad/registro-entidad/registro-entidad.component';
import { ActualizacionEntidadComponent } from './pages/entidad/actualizacion-entidad/actualizacion-entidad.component';
import { ListaTipoDocumentoComponent } from './pages/tipo-documento/lista-tipo-documento/lista-tipo-documento.component';
import { RegistroTipoDocumentoComponent } from './pages/tipo-documento/registro-tipo-documento/registro-tipo-documento.component';
import { ActualizacionTipoDocumentoComponent } from './pages/tipo-documento/actualizacion-tipo-documento/actualizacion-tipo-documento.component';
import { ListaTipoContribuyenteComponent } from './pages/tipo-contribuyente/lista-tipo-contribuyente/lista-tipo-contribuyente.component';
import { RegistroTipoContribuyenteComponent } from './pages/tipo-contribuyente/registro-tipo-contribuyente/registro-tipo-contribuyente.component';
import { ActualizacionTipoContribuyenteComponent } from './pages/tipo-contribuyente/actualizacion-tipo-contribuyente/actualizacion-tipo-contribuyente.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';

//LIBRERIAS DE ANGULAR MATERIAL
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ListaEntidadComponent,
    RegistroEntidadComponent,
    ActualizacionEntidadComponent,
    ListaTipoDocumentoComponent,
    RegistroTipoDocumentoComponent,
    ActualizacionTipoDocumentoComponent,
    ListaTipoContribuyenteComponent,
    RegistroTipoContribuyenteComponent,
    ActualizacionTipoContribuyenteComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //HTTP CLIENT
    HttpClientModule,
    //ANGULAR MATERIAL COMPONENTS
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
