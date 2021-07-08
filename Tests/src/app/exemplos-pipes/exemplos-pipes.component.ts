import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor() {
  }

ngOnInit(): void {
}

}
