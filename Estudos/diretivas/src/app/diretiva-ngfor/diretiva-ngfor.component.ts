import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Java", "Phonegap"];

  constructor() { }

  ngOnInit(): void {
    for (let i=0; i<this.cursos.length; i++){
      let curso =   this.cursos[i];
      if(this.cursos[i] ==="Java" ){
        console.log("For normal",true)
      }
    }
    console.log("Someljaçknpanacspinccó",this.cursos.some((elemt)=> elemt === "Java"))

    this.cursos.forEach((i)=>{
      console.log("For each",i)
    })


  }

}
