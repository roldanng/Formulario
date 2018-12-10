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
  success = true;

  constructor( private formService: FormService ) { }

  ngOnInit() {
    this.usuario = this.formService.nuevoUsuario();
  }

  nuevoUsuario(f): void {
    if (!f) {
      this.formService.agregarUsuario(this.usuario);
      this.usuario = this.formService.nuevoUsuario();
    }
    
  }

}
