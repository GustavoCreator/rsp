import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string ='http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem ='http://lorempixel.com/400/200/nature/';

  getValor(){
    return 1;
  }

nomeDoCurso: string = 'Angular';

  getCurtirCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão Clicado');
  }
  onMouseOverOut(){
   this.isMouseOver = !this.isMouseOver;
  }
  isMouseOver: boolean = false;
 
  nome: string = '';

  valorAtual:string = ''; 
  valorSalvo:string = ''; 

  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

salvarNome(event: KeyboardEvent){
  this.nome = (<HTMLInputElement>event.target).value;
}

  pessoa: any = {
    nome:'Omelete',
    idade: 20
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;
  }

  onMudouValor(evento: number){
    console.log(evento);
  }
  
  valorInicial: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
