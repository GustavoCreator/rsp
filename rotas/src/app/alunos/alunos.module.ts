import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { FormsModule } from "@angular/forms";
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { AlunosDeactivateGuard } from './../guards/alunos-desativados.guard';
import { AlunoDetalheResolver } from "../guards/aluno-detalhe.resolver";

@NgModule({
    imports: [
    CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [AlunosComponent,
                  AlunosFormComponent,
                  AlunosDetalheComponent],
    providers: [
      AlunosService,
      AlunosDeactivateGuard,
    AlunoDetalheResolver],
})
export class AlunosModule{}
