import { Input,AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges,OnInit,DoCheck,AfterContentChecked,
                                       AfterContentInit,AfterViewInit,AfterViewChecked, OnDestroy {

@Input() valorInicial: number= 10;

  constructor() {
    this.log('constructor');
  }
  ngAfterViewInit(){
    this.log ('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log ('ngAfterViewChecked');
  }
  ngAfterContentChecked() {
    this.log ('ngAfterContentChecked');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }
  
  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
this.log('ngAfterContentInit');
  }

  ngAfterWViewChecked(){
    this.log('ngAfterWViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  ngOnInit(){
    this.log('ngOnInit');
  }

  private log(hook:string){
    console.log(hook);
  }

}
