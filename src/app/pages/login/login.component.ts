import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  //BOTONES
  boton1=false;
  boton2=true;

  constructor(){

  }

  iniciarSesion(){
    this.boton1=true;
    this.boton2=false;
  }
}
