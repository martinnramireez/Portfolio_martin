import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() seccionintro: any;
  @Input() seccionaboutme: any;

  constructor() { }

  ngOnInit(): void {
  }

  scrollHaciaintro() {
    this.seccionintro.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  scrollHaciaaboutme() {
    this.seccionaboutme.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
