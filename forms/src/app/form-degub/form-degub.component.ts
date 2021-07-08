import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-degub',
  templateUrl: './form-degub.component.html',
  styleUrls: ['./form-degub.component.css']
})
export class FormDegubComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}
function input() {
  throw new Error('Function not implemented.');
}

