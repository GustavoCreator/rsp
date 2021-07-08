import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../alunos';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {


  aluno!: Aluno;

  incricao :Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(){
    /* this.incricao = this.route.params.subscribe(
      (params:any) => {
        let id = params ['id'];

        this.aluno = this.alunosService.getAluno(id);

      }
    );*/

       console.log('ngOnInit : AlunosDetalheComponent');

    this.incricao = this.route.data.subscribe(
      (info = {aluno : Aluno}) => {
        console.log('RECEBENDO O OBJETO DO ALUNO RESOLVER');
        this.aluno = info.aluno
      }
    )
  }
  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id,'editar'])
  }

ngOnDestroy() {
 this.incricao.unsubscribe();
}
}
