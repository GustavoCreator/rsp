import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
} 

@HostListener('mouseleave') onMouseLeave(){
 this.backgroundColor = this.defaultColor;
 }
 
   @HostBinding('style.backgroundColor')
   backgroundColor!: string;

    @Input() defaultColor: string = 'White';
    @Input() highlightColor: string = '#FFB6C1';
 
   constructor(){ }
   
   ngOnInit(){
     this.backgroundColor = this.defaultColor;
   }

}
