import { NgModule, Component } from '@angular/core';
import { RouterModule, CanActivateChild } from '@angular/router';
import { CanDeactivate } from '@angular/router';

import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-desativados.guard';
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolver';

const alunosRoutes = [
        {path: '', component: AlunosComponent,
        CanActivateChild: [AlunosGuard] ,children: [
        {path: 'novo', component: AlunosFormComponent},
        {path: ':id', component: AlunosDetalheComponent,
      resolve: {aluno: AlunoDetalheResolver}},
        {path: ':id/editar', component: AlunosFormComponent,
          canDeactivate:[AlunosDeactivateGuard]}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule{}
