import { Component, OnInit } from '@angular/core';
import { FormService } from './../form.service';
import { Usuario} from './../form.model';

@Component({
  selector: 'app-listado-registro',
  templateUrl: './listado-registro.component.html',
  styleUrls: ['./listado-registro.component.scss']
})
export class ListadoRegistroComponent implements OnInit {
  usuarios: Usuario[];
  constructor(  private formService: FormService ) { }

  ngOnInit() {
    this.usuarios = this.formService.getUsuarios();
  }

}
