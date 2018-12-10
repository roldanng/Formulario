import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from './form.service';
import { AltaRegistroComponent } from './alta-registro/alta-registro.component';
import { FormsModule } from '@angular/forms';
import { ListadoRegistroComponent } from './listado-registro/listado-registro.component';

@NgModule({
  declarations: [AltaRegistroComponent, ListadoRegistroComponent],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    AltaRegistroComponent,
    ListadoRegistroComponent
  ]
})
export class FormModule { }
