import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';
import { FormDegubComponent } from '../form-degub/form-degub.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaCepService } from './services/consulta-cep.service';


@NgModule({
  declarations: [
    FormDegubComponent,
    CampoControlErroComponent,
  ],
  imports: [
  CommonModule,
  HttpClientModule
  ],
  exports: [
    FormDegubComponent,
    CampoControlErroComponent,
  ],
  providers: [
    DropdownService,
    ConsultaCepService
  ],
})
export class SharedModule { }
