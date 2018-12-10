import { Injectable } from '@angular/core';
import { Usuario } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private usuarios: Usuario[];


  constructor() {
    
    this.usuarios = [];
  }


  getUsuarios() {
    return this.usuarios;
  }

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  nuevoUsuario(): Usuario {
    return {
      id: this.usuarios.length,
      nombre: '',
      apellidos: '',
      correo: '',
      contrasenia: ''
    };
  }
  
}
