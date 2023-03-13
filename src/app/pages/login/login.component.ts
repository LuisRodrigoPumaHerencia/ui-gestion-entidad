import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { LoginRestService } from 'src/app/services/login-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario_login = new FormGroup({
    'usuario' : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    'contrasena': new FormControl('', [Validators.required, Validators.maxLength(50)])
  });
  get usuario(){
    return this.formulario_login.get('usuario') as FormControl;
  }
  get contrasena(){
    return this.formulario_login.get('contrasena') as FormControl;
  }

  //USUARIO
  user!:Usuario;

  //BOTONES
  boton1=false;
  boton2=true;

  constructor(
    private router: Router,
    private login_rest: LoginRestService
  ){

  }

  iniciarSesion(){
    this.boton1=true;
    this.boton2=false;
    this.user = new Usuario();
    this.user.email=this.usuario.value;
    this.user.password=this.contrasena.value;
    this.login_rest.iniciarSesion(this.user).subscribe({
      next: (data:any)=>{
          Swal.fire(
            'Registrado!',
            "¡Inicio de Sesion exitoso!",
            'success'
          ).then((result:any)=>{
            if(result.isConfirmed){
              this.boton1=false;
              this.boton2=true;
              this.router.navigate(['/inicio']);
            }
          });
      },
      error: (error:any)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Credenciales Incorrectas"
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
