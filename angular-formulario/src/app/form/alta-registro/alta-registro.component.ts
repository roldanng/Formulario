import { Component, OnInit } from '@angular/core';
import { FormService } from './../form.service';
import { Usuario } from './../form.model';

@Component({
  selector: 'app-alta-registro',
  templateUrl: './alta-registro.component.html',
  styleUrls: ['./alta-registro.component.scss']
})
export class AltaRegistroComponent implements OnInit {

  usuario: Usuario;
  

  constructor( private formService: FormService ) { }

  ngOnInit() {
    this.usuario = this.formService.nuevoUsuario();
  }

  nuevoUsuario(): void {
    this.formService.agregarUsuario(this.usuario);
    this.usuario = this.formService.nuevoUsuario();
  }

}
