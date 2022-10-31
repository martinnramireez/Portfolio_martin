import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ElementRef, ViewChild} from '@angular/core'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formularioDeContacto: FormGroup | any;

  @ViewChild('seccionintro') seccionintro: ElementRef | any;
  @ViewChild('seccionaboutme') seccionaboutme: ElementRef | any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioDeContacto = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      mensaje: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }
  alEnviarMensaje() {


    if (this.formularioDeContacto.valid == true) {

      window.open('https://wa.me/' + 2215400747 + '?text=Hola, mi nombre es '
        + this.formularioDeContacto.value.nombre +
        '. Me quiero contactar con vos por lo siguiente:'
        + this.formularioDeContacto.value.mensaje, '_blank');
    }

  }

  title = 'portfoliofinal';

}
