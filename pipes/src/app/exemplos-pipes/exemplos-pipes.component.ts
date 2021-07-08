import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FiltroArrayImpuroPipe } from './../filtro-array-impuro.pipe';




@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit, FormsModule {
  
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.3,
    paginas: 218,
    preco: 315.76,
    lancamento: new Date (2014, 8, 23),
    url: 'https://www.youtube.com/watch?v=45sCcD4LWc8'
  };
filtro: string = '';

livros: string [] = ['Java','Angular 2'];

addCurso(valor: string){
  this.livros.push(valor);
}

obterCursos(){
  if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ' '){
    return this.livros;
  }

  return this.livros.filter((v) => {
    if (v.toLowerCase().indexOf(this.filtro.toLowerCase())>=0){
      return true;
    }
    return false;
  });
}

 valorAsync = new Promise((resolve, reject) => {
   setTimeout(() => resolve('Valor assincrono'), 2000)
 });

valorAsync2 = interval(2000).pipe(
   map((valor: any) => 'Valor assíncrono 2')
 );

 constructor(){}
ngOnInit(): void {}

}