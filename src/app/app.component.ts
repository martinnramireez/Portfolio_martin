import { Component } from '@angular/core';
import {ElementRef, ViewChild} from '@angular/core'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  @ViewChild('seccionintro') seccionintro: ElementRef | any;
  @ViewChild('seccionaboutme') seccionaboutme: ElementRef | any;


  constructor() { }

  ngOnInit() {

    console.log(this.seccionintro);
    console.log(this.seccionaboutme);

  }

  title = 'portfoliofinal';

}
