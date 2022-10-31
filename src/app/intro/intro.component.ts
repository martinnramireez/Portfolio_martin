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
  @Input() seccionskills: any;
  @Input() seccioncontact: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.seccionaboutme);
    console.log(this.seccionaboutme);

  }

  scrollHaciaintro() {
    this.seccionintro.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  scrollHaciaaboutme() {
    this.seccionaboutme.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  scrollHaciaskills() {
    this.seccionskills.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  scrollHaciacontact() {
    this.seccioncontact.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}
