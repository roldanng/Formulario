import { Injectable } from '@angular/core';
import { Usuario } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private usuarios: Usuario[];


  constructor() {
    
    this.usuarios = [
      {
        id: 0,
        nombre: 'Roldan',
        apellidoP: 'Nieto',
        apellidoM: 'Gonzalez',
        correo: 'rolitho@msn.com',
        contrasenia: ''
      }
    ];
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
      apellidoP: '',
      apellidoM: '',
      correo: '',
      contrasenia: ''
    };
  }
  
}
