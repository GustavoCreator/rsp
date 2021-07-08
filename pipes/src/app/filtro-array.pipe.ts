import {Input, Pipe, PipeTransform} from '@angular/core';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform,FormsModule {

  transform(value: any, args?: any): any {

    if (value.length === 0 || args === undefined){
      return value;
    }
    let filter = args.toLocaleLowerCase();
    return value.filter(
      (v: string) => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

}